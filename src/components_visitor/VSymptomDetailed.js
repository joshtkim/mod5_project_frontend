import React from 'react';
import body from '../images/body.jpg'

class VSymptomDetailed extends React.Component {

    state = {
        location: '',
        visitor_symptom: '',
    }

    handleClick = (e) => {
		console.log("x" + e.clientX);	
        console.log("y" + e.clientY);

        let newLocation

        //front side
        if(e.clientY > 214 && e.clientY < 270 && e.clientX > 187 && e.clientX < 242) {
            newLocation = "front head"
        }
        else if(e.clientY > 271 && e.clientY < 279 && e.clientX > 199 && e.clientX < 233) {
            newLocation = "front neck"
        }
        else if(e.clientY > 280 && e.clientY < 365 && e.clientX > 175 && e.clientX < 256) {
            newLocation = "front torso"
        }
        else if(e.clientY > 366 && e.clientY < 432 && e.clientX > 179 && e.clientX < 252) {
            newLocation = "abdomen"
        }
        else if(e.clientY > 434 && e.clientY < 466 && e.clientX > 173 && e.clientX < 259) {
            newLocation = "front hips and groin"
        }
        //legs
        else if(e.clientY > 467 && e.clientY < 528 && e.clientX > 173 && e.clientX < 213) {
            newLocation = "front right quad"
        }
        else if(e.clientY > 529 && e.clientY < 555 && e.clientX > 182 && e.clientX < 213) {
            newLocation = "front right knee"
        }
        else if(e.clientY > 556 && e.clientY < 645 && e.clientX > 179 && e.clientX < 212) {
            newLocation = "front right shin"
        }
        else if(e.clientY > 646 && e.clientY < 672 && e.clientX > 184 && e.clientX < 213) {
            newLocation = "front right foot & ankle"
        }
        else if(e.clientY > 467 && e.clientY < 528 && e.clientX > 219 && e.clientX < 257) {
            newLocation = "front left quad"
        }
        else if(e.clientY > 529 && e.clientY < 555 && e.clientX > 220 && e.clientX < 249) {
            newLocation = "front left knee"
        }
        else if(e.clientY > 556 && e.clientY < 645 && e.clientX > 219 && e.clientX < 255) {
            newLocation = "front left shin"
        }
        else if(e.clientY > 646 && e.clientY < 672 && e.clientX > 219 && e.clientX < 247) {
            newLocation = "front left foot & ankle"
        }
        //arms
        else if(e.clientY > 293 && e.clientY < 328 && e.clientX > 152 && e.clientX < 174) {
            newLocation = "front right shoulder"
        }
        else if(e.clientY > 329 && e.clientY < 388 && e.clientX > 151 && e.clientX < 173) {
            newLocation = "front right bicep & elbow"
        }
        else if(e.clientY > 389 && e.clientY < 442 && e.clientX > 135 && e.clientX < 163) {
            newLocation = "front right forearm & wrist"
        }
        else if(e.clientY > 443 && e.clientY < 488 && e.clientX > 118 && e.clientX < 153) {
            newLocation = "front right palm"
        }
        else if(e.clientY > 293 && e.clientY < 328 && e.clientX > 257 && e.clientX < 279) {
            newLocation = "front left shoulder"
        }
        else if(e.clientY > 329 && e.clientY < 388 && e.clientX > 260 && e.clientX < 284) {
            newLocation = "front left bicep & elbow"
        }
        else if(e.clientY > 389 && e.clientY < 442 && e.clientX > 267 && e.clientX < 298) {
            newLocation = "front left forearm & wrist"
        }
        else if(e.clientY > 443 && e.clientY < 488 && e.clientX > 280 && e.clientX < 312) {
            newLocation = "front left palm"
        }
         //back side
        else if(e.clientY > 214 && e.clientY < 270 && e.clientX > 418 && e.clientX < 470) {
            newLocation = "back head"
        }
        else if(e.clientY > 271 && e.clientY < 279 && e.clientX > 429 && e.clientX < 461) {
            newLocation = "back neck"
        }
        else if(e.clientY > 280 && e.clientY < 365 && e.clientX > 403 && e.clientX < 487) {
            newLocation = "back shoulder blades"
        }
        else if(e.clientY > 366 && e.clientY < 432 && e.clientX > 409 && e.clientX < 482) {
            newLocation = "mid to lower back"
        }
        else if(e.clientY > 434 && e.clientY < 466 && e.clientX > 403 && e.clientX < 487) {
            newLocation = "back hips and glutes"
        }
        //legs
        else if(e.clientY > 467 && e.clientY < 528 && e.clientX > 403 && e.clientX < 442) {
            newLocation = "back left hamstring"
        }
        else if(e.clientY > 529 && e.clientY < 555 && e.clientX > 413 && e.clientX < 443) {
            newLocation = "back left knee"
        }
        else if(e.clientY > 556 && e.clientY < 645 && e.clientX > 409 && e.clientX < 443) {
            newLocation = "back left calf"
        }
        else if(e.clientY > 646 && e.clientY < 672 && e.clientX > 418 && e.clientX < 442) {
            newLocation = "back left heel"
        }
        else if(e.clientY > 467 && e.clientY < 528 && e.clientX > 447 && e.clientX < 486) {
            newLocation = "back right hamstring"
        }
        else if(e.clientY > 529 && e.clientY < 555 && e.clientX > 448 && e.clientX < 477) {
            newLocation = "back right knee"
        }
        else if(e.clientY > 556 && e.clientY < 645 && e.clientX > 448 && e.clientX < 471) {
            newLocation = "back right calf"
        }
        else if(e.clientY > 646 && e.clientY < 672 && e.clientX > 448 && e.clientX < 472) {
            newLocation = "back right heel"
        }
        //arms
        else if(e.clientY > 293 && e.clientY < 328 && e.clientX > 383 && e.clientX < 402) {
            newLocation = "back left shoulder"
        }
        else if(e.clientY > 329 && e.clientY < 388 && e.clientX > 380 && e.clientX < 402) {
            newLocation = "back left tricep & elbow"
        }
        else if(e.clientY > 389 && e.clientY < 442 && e.clientX > 365 && e.clientX < 395) {
            newLocation = "back left forearm & wrist"
        }
        else if(e.clientY > 443 && e.clientY < 488 && e.clientX > 350 && e.clientX < 384) {
            newLocation = "back left hand"
        }
        else if(e.clientY > 293 && e.clientY < 328 && e.clientX > 488 && e.clientX < 508) {
            newLocation = "back right shoulder"
        }
        else if(e.clientY > 329 && e.clientY < 388 && e.clientX > 488 && e.clientX < 513) {
            newLocation = "back right tricep & elbow"
        }
        else if(e.clientY > 389 && e.clientY < 442 && e.clientX > 494 && e.clientX < 525) {
            newLocation = "back right forearm & wrist"
        }
        else if(e.clientY > 443 && e.clientY < 491 && e.clientX > 507 && e.clientX < 541) {
            newLocation = "back right hand"
        }
        else{
            newLocation = ''
        }

        this.setState({
            location: newLocation
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        fetch("http://localhost:3000/symptoms", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                location: this.state.location,
                visitor_symptom: this.state.visitor_symptom,
                appointment_id: this.props.apptId
            })
        })
        .then(r => r.json())
        .then(console.log)
        this.props.routerProps.history.push('/visitor/profile')
    }

    render(){
        return (
            <div className="main-symptom-container">
                    <h1>Please explain your symptoms in detail</h1>
                <div className="symptom-detailed">
                    <div className="symptom-image">
                        <img onClick={this.handleClick} src={body} alt="body silhouette"/>
                    </div>
                    <div className="input">
                        <h2>Please fill out form below</h2>
                    {this.state.location !== '' ? 
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <h2>{this.state.location}</h2>
                                <input placeholder="Please describe in detail the issue" type="text" onChange={this.handleChange} value={this.state.visitor_symptom} name="visitor_symptom"/>
                                <input type="submit"/>
                            </form>
                        </div>
                        :
                        null}  
                    </div>
                </div>
            </div>
        )
    }


}

export default VSymptomDetailed