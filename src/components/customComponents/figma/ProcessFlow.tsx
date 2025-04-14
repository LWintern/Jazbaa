"use client"

// components/ProcessFlow.tsx
import { FC, useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { LightbulbIcon, LaptopIcon, PresentationIcon } from 'lucide-react';

const CurvedLines: FC<{ containerWidth: number }> = ({ containerWidth }) => {
  const startPoint = containerWidth * 0.1;
  const endPoint = containerWidth * 0.9;
  const midPoint = containerWidth * 0.5;
  const curveDepth = 40;

  return (
    <svg 
      className="absolute top-0 left-0 w-full h-full -z-10" 
      viewBox={`0 0 ${containerWidth} 100`}
      preserveAspectRatio="none"
    >
      {/* Curved Dashed Lines */}
      <path
        d={`M ${startPoint},20 Q ${midPoint/2},${20 + curveDepth} ${midPoint},20`}
        fill="none"
        stroke="#E5E7EB"
        strokeWidth="2"
        strokeDasharray="6 6"
      />
      <path
        d={`M ${midPoint},20 Q ${(containerWidth + midPoint)/2},${20 + curveDepth} ${endPoint},20`}
        fill="none"
        stroke="#E5E7EB"
        strokeWidth="2"
        strokeDasharray="6 6"
      />

      {/* Connection Circles */}
      {/* Start Circle */}
      <circle
        cx={startPoint}
        cy="20"
        r="4"
        fill="white"
        stroke="#E5E7EB"
        strokeWidth="2"
      />
      
      {/* Middle Circle */}
      <circle
        cx={midPoint}
        cy="20"
        r="4"
        fill="white"
        stroke="#E5E7EB"
        strokeWidth="2"
      />
      
      {/* End Circle */}
      <circle
        cx={endPoint}
        cy="20"
        r="4"
        fill="white"
        stroke="#E5E7EB"
        strokeWidth="2"
      />
    </svg>
  );
};

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  isActive?: boolean;
}

const ProcessStep: FC<ProcessStepProps> = ({ icon, title, isActive }) => (
  <div className="flex flex-col items-center relative z-10">
    <div className={`rounded-lg p-4 bg-white ${isActive ? 'bg-primary/10' : 'bg-gray-100'}`}>
      {icon}
    </div>
    <span className="mt-2 text-sm font-medium">{title}</span>
  </div>
);

interface ProcessFlowProps {
  activeStep?: 'learn' | 'build' | 'present';
  description?: string;
}

const ProcessFlow: FC<ProcessFlowProps> = ({ 
  activeStep = 'learn',
  description = 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the ns of Lorem ipsum.'
}) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef) {
      const updateWidth = () => {
        setContainerWidth(containerRef.offsetWidth);
      };
      
      updateWidth();
      window.addEventListener('resize', updateWidth);
      
      return () => window.removeEventListener('resize', updateWidth);
    }
  }, [containerRef]);

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <div 
        className="relative flex justify-between mb-8 h-32"
        ref={setContainerRef}
      >
        {containerWidth > 0 && <CurvedLines containerWidth={containerWidth} />}
        
        <ProcessStep 
          icon={<LightbulbIcon className="w-6 h-6" />}
          title="Learn"
          isActive={activeStep === 'learn'}
        />
        <ProcessStep 
          icon={<LaptopIcon className="w-6 h-6" />}
          title="Build"
          isActive={activeStep === 'build'}
        />
        <ProcessStep 
          icon={<PresentationIcon className="w-6 h-6" />}
          title="Present"
          isActive={activeStep === 'present'}
        />
      </div>

      <Card className="p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-gray-200 p-2">
            <LightbulbIcon className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Learn</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProcessFlow;