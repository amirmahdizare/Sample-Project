import React from 'react'
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const LoginPage = () => {
    const [state,setState] = useState({
        username:'',
        password:''
    })
    const useStyles = makeStyles((theme) => ({
        root: {
          
            marginTop: theme.spacing(5),
            padding:'20px',
            width:'50%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            boxShadow:'0px 0px 3px gray ',
            textAlign:'center',
            fontSize:'1.5rem',
            direction:'rtl',
            flexGrow: '1',
            alignItems:'center'
          
        },
        input:{
            width:"90%",
            direction:'rtl',
            float:'right',
            fontSize:'1em',
            "& $div":{
                    right:'0'
            }

        
           
        },
        button:{
            width:'50%', 
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
      const handleLogIn = () =>{
          
      }
    return (
        <>
        <CssBaseline />
       <Container className={classes.root} maxWidth="sm" fixed spacing={2}>
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
       <form>
       <h2>ورود به حساب کاربری</h2>
       <Grid  container spacing={6} > 
       <Grid className={classes.gridContainer}  item xs={12} >
           <TextField id="username" required  variant="outlined" className={classes.input} label="نام کاربری" value={state.username} onChange={(e) => handleTextFieldChange(e.target.id ,e.target.value)}/>
        </Grid>
        <Grid className={classes.gridContainer} item xs={12}>
            <TextField type="password" required variant="outlined" id="password" className={classes.input}  label="رمز" value={state.password} onChange={(e) => handleTextFieldChange(e.target.id,e.target.value)} />
            </Grid>
        
        <Grid className={classes.gridContainer} item xs={12}> <Button type="submit" onClick={handleLogIn} className={classes.button}   variant="contained" color="primary" sm={12}>ورود</Button></Grid>

      
        </Grid>
       </form>
      </Container>
       </>
    )
}
export {LoginPage}