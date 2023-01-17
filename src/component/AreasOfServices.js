import React from 'react'
import { Container,Row ,Col } from "reactstrap";

const AreasOfServices = () => {
  return (
    <div className=''>
    <Row className='d-flex justify-content-center align-items-center' >
    <div  className='text-center'>
    <h2>Areas Of Services</h2>
    
    </div>
    <div className='main-line'  style={{width:"50px"}}></div>
    </Row>
    <Row className=' mx-5 my-3'>
        <Col sm="12" md="6" lg="3" xl="3" xxl="3" className='d-flex justify-content-center align-items-center' >
             <div className='  mb-3 area-card' >
        <div className=' h-75 '>
        <img src='images/confidance.png' className='w-100 h-100 text-white'></img>
        </div>
        <div  className='text-center'>
        Confidence Building
        </div>
               
            </div>
        </Col>
        <Col sm="12" md="6" lg="3" xl="3" xxl="3" className='d-flex justify-content-center align-items-center'>
        <div className='  mb-3 area-card' >
        <div className=' h-75 '>
        <img src='images/confidance.png' className='w-100 h-100 text-white'></img>
        </div>
        <div  className='text-center'>
            Uresolved Childhood Issues
        </div>
               
            </div>
        </Col>
        <Col sm="12" md="6" lg="3" xl="3" xxl="3" className='d-flex justify-content-center align-items-center'>
        <div className='  mb-3 area-card' >
        <div className=' h-75 '>
        <img src='images/anxiety.png' className='w-100 h-100 text-white'></img>
        </div>
        <div className='text-center'>
            Anxiety
        </div>
               
            </div>
        </Col>
        <Col sm="12" md="6" lg="3" xl="3" xxl="3" className='d-flex justify-content-center align-items-center' >
        <div className='  mb-3 area-card'>
        <div className=' h-75 '>
        <img src='images/brief.png' className='w-100 h-100 text-white'></img>
        </div>
        <div  className='text-center'>
            Brief Therapy
        </div>
               
            </div>
        </Col>
        <Col className='d-flex justify-content-center align-items-center'>
        <div className=' ' style={{height:"175px",width:"175px"}}>
        <div className=' h-75 '>
        <img src='images/counciling.png' className='w-100 h-100 text-white'></img>
        </div>
        <div  className='text-center'>
            Indevisual/Relationship<br/>counseling
        </div>
               
            </div>
        </Col>
        
    </Row>
   

    </div>
  )
}

export default AreasOfServices