import React, { useEffect, useRef, useState } from 'react'
import "./Body_module.css"
import{ArrowDown} from "react-feather";
import ReactToPrint from 'react-to-print';
import Editor from '../editor/Editor';
import Resume from '../Resume/Resume';
const Body = () => {
    const colors = ["#239ce2","#48bb78","#0bc5ea","#a0aec0","#ed8936"];
    const sections = {
      basicInfo:"Basic Info",
      workExp:"Work Experience",
      project:"Projects",
      education:"Education",
      achievements:"Achievements",
      summary:"Summary",
      other:"Other", };    
    const resumeRef=useRef()
    const [activeColor,setActiveColor] =useState(colors[0]);
    // storing resume information here 
    const [resumeInformation,setResumeInformation] = useState({
      [sections.basicInfo]:{
        id:sections.basicInfo,
        sectionTitle:sections.basicInfo,
        detail:{},   
      },      
      [sections.workExp]:{
        id:sections.workExp,
        sectionTitle:sections.workExp,
        // details:[{title:"dummyNameform checking"}],   
        details:[],   
      },      
      [sections.project]:{
        id:sections.project,
        sectionTitle:sections.project,
        details:[],   
      },      
      [sections.education]:{
        id:sections.education,
        sectionTitle:sections.education,
        details:[],   
      },      
      [sections.achievements]:{
        id:sections.achievements,
        sectionTitle:sections.achievements,
        points:[],   
      },    
      [sections.summary]:{
        id:sections.summary,
        sectionTitle:sections.summary,
        detail:"",   
      },     
      [sections.other]:{
        id:sections.other,
        sectionTitle:sections.other,
        detail:"",   
      },  
    });
    useEffect(()=>{
      console.log(resumeInformation);
    },[resumeInformation])
  return (
    <>
    <div className='containers'>
        <p className="heading">Resume Builder</p>
        <div className="toolbar">
            <div className="colors">
            { colors.map((item)=>(
                <span  key={item} style={{backgroundColor:item}}
                  className={` color ${activeColor===item? "active" :""}`}
                  onClick={()=> setActiveColor(item)}></span> )) } </div>
            <ReactToPrint trigger={()=>{
              return ( <button> Download <ArrowDown/></button>) }}
            content={()=>resumeRef.current} /> </div>
        {/* --main editing feature starts from here --------------- */}
        <div className="main">
          <Editor sections  ={sections} information={resumeInformation}
            setInformation={setResumeInformation}  />
          <Resume ref={resumeRef}
          sections={sections} information={resumeInformation}
            activeColor={activeColor} />
        </div>
    </div>
    </>
  )
}
export default Body;