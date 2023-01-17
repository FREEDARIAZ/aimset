import React from 'react'
import { Row,Col } from 'reactstrap'

const AimSet = () => {
  return (
    <div className='ms-5 me-5 '>
    <Row className='text-center ps-5 pe-5'>
        <h3 className='pt-5  '>Why Amindset</h3>
    </Row>
    <Row className=''>
    <Col className='' lg="6" md="12">
    <Row className='ps-5 '>
    <Col  lg="2" md="2" sm="2" className=' p-2'>
        <div className='text-white aim-circle text-center p-1'><b>1</b></div>
    </Col>
    <Col className=' p-2' lg="10" md="10" sm="10">
       <div >
       <h4>Quality</h4>
        <p>
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
        </p>
       </div>
    </Col>
        
    </Row>
    <Row className='ps-5'>
    <Col   lg="2" md="2" sm="2" className=' p-2'>
        <div className='text-white aim-circle text-center p-1'style={{backgroundColor:"rgb(202, 238, 144)"}}><b>2</b></div>
    </Col>
    <Col className=' p-2' lg="10" md="10" sm="10">
       <div >
       <h4>Privacy</h4>
        <p>
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
        </p>
       </div>
    </Col>
        
    </Row>
    <Row className='ps-5'>
    <Col   lg="2" md="2" sm="2" className=' p-2'>
        <div className='text-white aim-circle text-center p-1' style={{backgroundColor:"rgb(112, 243, 204)"}}><b>3</b></div>
    </Col>
    <Col className=' p-2' lg="10" md="10" sm="10">
       <div >
       <h4>Affordable</h4>
        <p>
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
        </p>
       </div>
    </Col>
        
    </Row>
    <Row className='ps-5'>
    <Col   lg="2" md="2" sm="2" className=' p-2'>
        <div className='text-white aim-circle text-center p-1'style={{backgroundColor:"rgb(223, 146, 159)"}}><b>4</b></div>
    </Col>
    <Col className=' p-2' lg="10" md="10" sm="10">
       <div >
       <h4>Personalized</h4>
        <p>
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
         release of Letraset sheets containing Lorem  release of Letraset sheets containing Lorem
        </p>
       </div>
    </Col>
        
    </Row>
        
    </Col>
    <Col className=''>
    <div className="aim-bg"
    style={{ backgroundImage: `url("images/WaimdSet.png")`,width:"100" ,height:"100" }} >

    </div>
            
    </Col>

    </Row>
    {/* Experties */}
    <Row>
        <div>
        <Row className=' mx-5 my-3 pt-5'>
        <Col sm="12" md="6" lg="3" xl="3" xxl="3" className='d-flex justify-content-center align-items-center' >
             <div className='  mb-3 expert-card' >
             <h4>Meet The Experts</h4>
            <p>The most dedicated healthcare Providers in the US ready to meetz</p>
       
               
            </div>
        </Col>
        <Col sm="12" md="6" lg="3" xl="3" xxl="3" className='d-flex justify-content-center align-items-center'>
        <div className='  mb-3 expert-card' >
        <div className=' h-75 '>
        <img src='images/expert1.png' className='w-100 h-100 text-white'></img>
        </div>
        <div>
        <h4>Kimberaly Johnnson</h4>
            <p>Social Worker</p>
        </div>
               
            </div>
        </Col>
        <Col sm="12" md="6" lg="3" xl="3" xxl="3" className='d-flex justify-content-center align-items-center'>
        <div className='  mb-3 expert-card' >
        <div className=' h-75 '>
        <img src='images/expert2.png' className='w-100 h-100 text-white'></img>
        </div>
        <div>
        <h4>Gregory Thomas</h4>
            <p>Psychologist</p>
        </div>
               
            </div>
        </Col>
        <Col sm="12" md="6" lg="3" xl="3" xxl="3" className='d-flex justify-content-center align-items-center' >
        <div className='  mb-3 expert-card'>
        <div className=' h-75 '>
        <img src='images/expert3.png' className='w-100 h-100 text-white'></img>
        </div>
        <div >
            <h4>Aminata Kamara</h4>
            <p>PCP (Primary Care Physican)</p>
        </div>
               
            </div>
        </Col>
     
        
    </Row>
        </div>
    </Row>

    </div>
  )
}

export default AimSet