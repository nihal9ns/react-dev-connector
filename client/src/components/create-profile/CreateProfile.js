import React, { Component } from "react";
import { withRouter,Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import InputGroup from '../common/InputGroup';
import { createProfile } from '../../actions/profileActions';

class CreateProfile extends Component {

  constructor(props){
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: '',
      company: '',
      website: '',
      location: '',
      status: '',
      skills: '',
      githubusername: '',
      bio: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      instagram: '',
      youtube: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e){
    e.preventDefault(); 

    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      instagram: this.state.instagram,
      youtube: this.state.youtube,
    }

    this.props.createProfile(profileData, this.props.history);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({errors: nextProps.errors});
    }
  }

  render() {

    const { errors,displaySocialInputs } = this.state;

    let socialInputs;

    if(displaySocialInputs){
        socialInputs = (
            <div>
              <InputGroup 
                placeholder="Twitter Profile URL"
                name="twitter"
                icon="fab fa-twitter"
                onChange={this.onChange}
                value={this.state.twitter}
                error={errors.twitter}
              />

               <InputGroup 
                placeholder="Facebook Profile URL"
                name="facebook"
                icon="fab fa-facebook"
                onChange={this.onChange}
                value={this.state.facebook}
                error={errors.facebook}
              />

               <InputGroup 
                placeholder="Youtube Profile URL"
                name="youtube"
                icon="fab fa-youtube"
                onChange={this.onChange}
                value={this.state.youtube}
                error={errors.youtube}
              />

               <InputGroup 
                placeholder="Linkedin Profile URL"
                name="linkedin"
                icon="fab fa-linkedin"
                onChange={this.onChange} 
                value={this.state.linkedin}
                error={errors.linkedin}
              />

               <InputGroup 
                placeholder="Instagram Profile URL"
                name="instagram"
                icon="fab fa-instagram"
                onChange={this.onChange}
                value={this.state.instagram}
                error={errors.instagram}
              />
            </div>
          )
      }else{

      }
    

    // Select options for status
    const options = [
      { label: '* Select Professional Status', value: 0},
      { label: 'Developer', value: 'Developer'},
      { label: 'Junior Developer', value: 'Junior Developer'},
      { label: 'Senior Developer', value: 'Senior Developer'},
      { label: 'Manager', value: 'Manager'},
      { label: 'Student or Learning', value: 'Student or Learning'},
      { label: 'Instructor or Teacher', value: 'Instructor or Teacher'},
      { label: 'Intern', value: 'Intern'},
      { label: 'Other', value: 'Other'}
    ];

    return (
   		<div className="create-profile">
     		 <div className="container">
            <div className="row">
               <div className="col-md-8 m-auto">
                  <Link to="/dashboard" className="btn btn-light">
                   Go Back
                  </Link>
                  <h1 className="display-4 text-center">Create Your Profile</h1>
                  <p className="lead text-center">
                    Let's get some information to make your profile standout
                  </p>
                  <small className="d-block pb-3">* = requried fields</small>
                  <form onSubmit={this.onSubmit}>
                    <TextFieldGroup 
                      placeholder="* Profile Handle"
                      name="handle"
                      value={this.state.handle}
                      onChange={this.onChange}
                      error={errors.handle}
                      info="A unique handle for your profile URL.Your full name, company name, nick name, etc. (This CANT be changed later)"
                    />

                    <SelectListGroup 
                      placeholder="Status"
                      name="status"
                      value={this.state.status}
                      onChange={this.onChange}
                      error={errors.status}
                      options={options}
                      info="Give us and idea of where you are at your career"
                    />

                     <TextFieldGroup 
                      placeholder="Company"
                      name="company"
                      value={this.state.company}
                      onChange={this.onChange}
                      error={errors.company}
                      info="Could be your own company or one you work for"
                    />

                    <TextFieldGroup 
                      placeholder="Website"
                      name="website"
                      value={this.state.website}
                      onChange={this.onChange}
                      error={errors.website}
                      info="Could be your own website or your company's"
                    />

                    <TextFieldGroup 
                      placeholder="Location"
                      name="location"
                      value={this.state.location}
                      onChange={this.onChange}
                      error={errors.location}
                      info="City or Country & State suggested (eg. Boston, MA)"
                    />

                    <TextFieldGroup 
                      placeholder="* Skills"
                      name="skills"
                      value={this.state.skills}
                      onChange={this.onChange}
                      error={errors.skills}
                      info="Please use comma separated values (eg. HTML,CSS,JavaScript)"
                    />

                    <TextFieldGroup 
                      placeholder="Github Username"
                      name="githubusername"
                      value={this.state.githubusername}
                      onChange={this.onChange}
                      error={errors.githubusername}
                      info="If you want your latest repos and a Github link, include your username"
                    />

                    <TextAreaFieldGroup 
                      placeholder="Short Bio"
                      name="bio"
                      value={this.state.bio}
                      onChange={this.onChange}
                      error={errors.bio}
                      info="Tell us a little about yourself"
                    />

                    <div className="mb-3">
                      <button 
                      type="button"
                      className="btn btn-light" 
                      onClick={() =>{
                        this.setState(prevState => ({
                          displaySocialInputs: !prevState.displaySocialInputs
                        }))
                      }}>
                        Add Social Network Links
                      </button>
                      <span className="text-muted">Optional</span>
                    </div>
                    {socialInputs}
                    <input type="submit" value="Submit" className="btn btn-info btn-block mt-4" />
                  </form>
              </div>  
            </div>      
         </div>  
   		</div>	      
    )
  }
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	profile: state.profile,
	errors: state.errors
});

export default connect(mapStateToProps, { createProfile })(withRouter(CreateProfile));