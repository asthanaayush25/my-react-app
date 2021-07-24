import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';
import { useRef } from 'react';
function NewMeetupForm(props)
{
    const titleRef=useRef();
    const imageRef=useRef();
    const addressRef=useRef();
    const descriptionRef=useRef();
    function submitHandler(event){
       event.preventDefault();
       const meetupData={
           title:titleRef.current.value,
           image:imageRef.current.value,
           address:addressRef.current.value,
           description:descriptionRef.current.value
       }
       props.onAddMeetup(meetupData);
    }
return (
<Card>
    <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
            <label htmlFor='title'>
                Meetup Title
            </label>
            <input type='text' required id='title' ref={titleRef}></input>
        </div>
        <div className={classes.control}>
            <label htmlFor='image'>
                Meetup Image
            </label>
            <input type='url' required id='image' ref={imageRef}></input>
        </div>
        <div className={classes.control}>
            <label htmlFor='address'>
                Meetup Address
            </label>
            <input type='text' required id='address' ref={addressRef}></input>
        </div>
        <div className={classes.control}>
            <label htmlFor='description'>
                Meetup Description
            </label>
            <textarea id='description' required rows='5' ref={descriptionRef}></textarea>
        </div>
        <div className={classes.actions}><button>Add Meetup</button></div>
        
    </form>
</Card>
);
}
export default NewMeetupForm;
