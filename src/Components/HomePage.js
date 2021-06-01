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

const HomePage = () => {

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
        </div> <br /><br /><br /><br />
        <div style={{float:"left", marginLeft:20}}>
            <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230B8043&amp;title=TJES%20Events&amp;mode=MONTH" style={{border:1}} width="680" height="510" frameborder="1" scrolling="no" title="TJES-Events"></iframe>
        </div>
        <div style={{marginLeft:20, marginRight:20, textAlign:"center"}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1706.3494782601788!2d-75.3697796485043!3d40.62283833398503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c43e4ba770989b%3A0xbbf30a2cb4f85bd!2sThomas%20Jefferson%20Elementary%20School!5e0!3m2!1sen!2sus!4v1622555021519!5m2!1sen!2sus" width="750" height="475" title="TJES-Location" loading="lazy"></iframe>
        </div>
        </div>
    );
}

export default HomePage;

