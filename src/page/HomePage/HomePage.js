import React from 'react'
import { useEffect ,useState } from 'react'
import {getAllCurrentTenantPlan} from '../../APIs/Planning'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {PlanningTable} from './components/PlanningTable' 
const  HomePage = () => {
    const [Data,setData] =useState({
        items:[]
    })
    useEffect(async() =>  {
         setData( await getAllCurrentTenantPlan({'Skipcount':0,'Maxresultcount':10}))
        
    },[])

    const useStyles = makeStyles((theme) => ({
        root: {
            borderRadius:'10px',
            marginTop: theme.spacing(5),
            padding:'20px',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            boxShadow:'0px 0px 3px gray ',
            textAlign:'center',
            fontSize:'1.5rem',
            flexGrow: '1',
            alignItems:'center',
            // backgroundImage: 'linear-gradient(to bottom  , limegreen,white, white )'
          
        }}))
        
    const classes = useStyles();
    console.log(Data)
    return (
        <>
            <Container className={classes.root} fixed spacing={2}>
            <PlanningTable data={Data}/>
            </Container>
        </>
    )
}
export {HomePage}