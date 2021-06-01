import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const SignIn = () => {

    return (
        <div style={{marginTop:20}}>
            <h2>Admin Access</h2>
            <Input type="text" placeholder="username"></Input> <br /> <br />
            <Input type="text" placeholder="password"></Input> <br /> <br />
            <Button variant="contained" color="primary">Sign In</Button>
        </div>
    );
}

export default SignIn;

