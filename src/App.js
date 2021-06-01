import './App.css';
import tjes from './tjes.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor:""
  }
});

function App() {
  const classes = useStyles();
  return (
    <div>
      <div style={{textAlign:"center"}}>
        <h1>Thomas Jefferson High School</h1>
      </div>
      <div style={{float:"left"}}>
        <img src={tjes} alt="school-pic" style={{width:680,height:300, marginLeft:20, marginRight:20}}></img>
      </div>
      <div style={{textAlign:"left", marginRight:20, marginLeft:20, marginTop:50}}>
        <Card className={classes.root}>
          <CardContent>
            <p>TJES was founded in 1978 with one mission in mind: empowering students with high-quality, immersive, well-rounded educational
            experiences meant to foster relationships and develop accomplished young adults. TJES is committed to helping students be prepared
            to become lifelong learners, be competent workers, become good citizens, live productive and fulfilled lives. We further believe 
            that our mission can best be achieved by partnering with families and the community, addressing the intellectual, emotional, 
            social, and physical needs of the learner, valuing hard work and honesty, viewing school as the work of youth, and embracing 
            diversity. Welcome to TJES!</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
