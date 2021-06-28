
import React, {useState, useEffect} from 'react'
import {
    Card,  CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col,CardImg, Container
} from "reactstrap";
import hbd from '../../assets/img/brand/hbd.png';
import api from 'api/api'
import Moment from 'moment';

function Memo({ memos, completeMemo, removeMemo }) {
    
    const getToken=localStorage.getItem('token')
    const [announceData, setAnnounceData] = useState([])
 
    const getAnnouncement = () => {
        api.get(`engagements/announcement/`, {headers: {Authorization: `Token ${getToken}`}})
        .then(res=>{
            console.log(res)
            setAnnounceData(res)
            

        })
        .catch(err=>{
            console.log(err)
        })
    }
   
    
    
    useEffect(()=>{
        getAnnouncement()
      }, [])
    

    
    

    return announceData.map((announce, index) => (
        
        
        <Container fluid className={announce.isComplete ? 'memo-column complete' : 'memo-column'}
        key={index} style={{ marginBottom:20, display: "inline-grid", }} >
            

        </Container>

    )
) 
}

export default Memo;
