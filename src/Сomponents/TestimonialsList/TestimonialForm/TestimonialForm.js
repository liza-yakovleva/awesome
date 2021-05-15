
import React, {Component} from 'react'
import { database } from '../../../firebase'
import './testimonials-item.css'


class TestimonialForm extends Component {
    constructor(props) {
        super(props);
        localStorage.removeItem('firebase:previous_websocket_failure')
        this.state = {
           
            partCommentRefer:"",
        index: 0,
            testimonials:[],
            newTestimonials: {
                author: "",
                text: "",
                email: "",
                date: "",
                id: "",
                avatar: "../img/unknown-avatar.png",
                replies:[]
            }
        }
        
        
    }

    handleAuthorChange = (e) => {
         this.setState({
            newTestimonials:
            {
                ...this.state.newTestimonials,
                author: e.target.value
            }
        })
    }
 handleTextChange = (e) => {
      this.setState({
            newTestimonials:
          {
               ...this.state.newTestimonials,
                text: e.target.value
            }
        })
 }
     handleEmailChange = (e) => {
         this.setState({
             newTestimonials: {
                 ...this.state.newTestimonials,
                email: e.target.value
            }})
     }
    onSend = (e) => {
        e.preventDefault()
        this.setState({
            newTestimonials:
            {
                ...this.state.newTestimonials,
                date: new Date().toLocaleString(),
                id: this.state.testimonials.length,
            }
        })
        
        this.setState({
            testimonials: [...this.state.testimonials,
            this.state.newTestimonials]
        })
        
        if (this.props.isComment) {
            
                // запись в базу нового комента с ожидание обновления state
            setTimeout(() => {
                    console.log(`${this.props.rootPartPath}${this.props.itemId-1}/testimonials/${this.props.testimonialsLength}`)
                    
                    database.ref(`${this.props.rootPartPath}${this.props.itemId-1}/testimonials`)
                        .child(`${this.props.testimonialsLength}`)
                        .set(this.state.newTestimonials)
                }, 600)
            
        } else {
                setTimeout(() => {
                    database.ref(`${this.props.rootPartPath}${this.props.itemId-1}/testimonials/${this.props.comId}/replies`)
                        .child(`${this.props.repliesLength}`)
                        .set(this.state.newTestimonials)
                }, 600)
            }

            setTimeout(() => {
                this.setState({
                    newTestimonials: {
                        author: "",
                        text: "",
                        email: "",
                    }
                })
        
            }, 1000)
        }
    
    render() {
     
        return (
            <>
                
                <div className="comment-form">
                    <form method="post" action="" onSubmit={this.onSend}>
                        <label htmlFor='comment'>
                            Ваш ОТЗЫВ: <small>(обязательное поле)</small>
                            <br />
                            <textarea onChange={this.handleTextChange} value={this.state.newTestimonials.text} name="comment" id="text-area" cols="10" rows="6" tabIndex="4" placeholder="Введите ваш отзыв..." required></textarea>
                        </label>
                        <label htmlFor='author'>
                            <br />
                                Ваше имя <small>(обязательное поле)</small>
                            <br />
                            <input onChange={this.handleAuthorChange} type='text' value={this.state.newTestimonials.author} id='author' name='author' placeholder="Введите ваше имя..." required />
                        </label>
                        <br />
                        <label htmlFor='email'>
                            Mail <small>(обязательное поле)</small>
                            <br />
                            <input onChange={this.handleEmailChange} type='email' value={this.state.newTestimonials.email} id='email' name='author_email' placeholder="Введите ваш email..." required />
                        </label>
                        <br />
                      
                        <div className='comment-btn'>
                            <button onClick={this.props.changeReplyForm} type="submit"  value="Leave a comment" >
                                Оставить отзыв
                                </button>
                        </div>
                    </form>
                </div>
            </>
                
        )
        
    }
}

export default TestimonialForm