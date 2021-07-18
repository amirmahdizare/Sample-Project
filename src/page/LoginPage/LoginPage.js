import React from 'react'
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Authentication} from '../../APIs/login'
const LoginPage = () => {
    const [state,setState] = useState({
        username:'',
        password:'',
        rememberme:false
    })
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
            backgroundImage: 'linear-gradient(to bottom  , limegreen,white, white )'
          
        },
        input:{
            width:"90%",
            float:'right',
            fontSize:'2em',
           }
        ,
        icon:{
            fontSize:'6em'
        },
        button:{
            fontSize:'1em'
        },
        gridContainer:{
            display:'flex',
            justifyContent:'center'
        }

      }));
      const classes = useStyles();
      const handleTextFieldChange = (id,value) =>{
          setState({...state,[id]:value})
      }
      const handleCheckboxChange = () =>{
        setState({...state,rememberme:!state.rememberme})
      }
      const handleLogIn = async(e) =>{
          e.preventDefault()
        //   if(await Authentication(state.username,state.password,state.rememberme))
        }
    return (
        <>
       <Container className={classes.root} maxWidth="sm" fixed spacing={2}>
       <form onSubmit={handleLogIn}>
       <AccountCircleIcon className={classes.icon}   />
       <h1>Login</h1>
       <Grid  container spacing={6} > 
       <Grid className={classes.gridContainer}  item xs={12} >
           <TextField hintStyle={{ width: '600px', textAlign: 'center' }} id="username" required  variant="outlined" className={classes.input} label="Username" value={state.username} onChange={(e) => handleTextFieldChange(e.target.id ,e.target.value)}/>
        </Grid>
        <Grid className={classes.gridContainer} item xs={12}>
            <TextField required variant="outlined" id="password" className={classes.input}  label="Password" value={state.password} onChange={(e) => handleTextFieldChange(e.target.id,e.target.value)} />
            </Grid>
        <Grid className={classes.gridContainer} item xs={12}> <FormControlLabel
        control={<Checkbox checked={state.rememberme} onChange={handleCheckboxChange}  />}
        label="Remember Me"
      /></Grid>
        <Grid className={classes.gridContainer} item xs={12}> <Button type="submit"  className={classes.button}   variant="contained" color="secondary" >Sign in</Button></Grid>

      
        </Grid>
       </form>
      </Container>
       </>
    )
}
export {LoginPage}