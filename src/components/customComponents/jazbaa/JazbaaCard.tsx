"use client"
import react from "react";
import Jazbaa1 from "./Jazbaa1";
import Jazbaa2 from "./Jazbaa2";
import Jazbaa3 from "./Jazbaa3";
interface JazbaaCardProps {
    activeTab: String;
  }
  const JazbaaCard: React.FC<JazbaaCardProps> = ({ activeTab }) => {
    if(activeTab==='Inclusivity'){
        return(
            <>
            <Jazbaa1></Jazbaa1>
            </>
        )
    }else if(activeTab==='Sustainability'){
        return(
            <>
                <Jazbaa2></Jazbaa2>
            </>
        )
    }else{
    return (
        <>
            <Jazbaa3></Jazbaa3>
        </>
    )
}
    
}

export default JazbaaCard;