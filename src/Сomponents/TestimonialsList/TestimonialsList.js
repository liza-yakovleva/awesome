import React, { Component } from "react"
import TestimonialsListItem from './TestimonialsListItem'
class TestimonialsList extends Component {
    render() {
    // console.log(this.props)
    //  console.log(data)
    
    // console.log(Object.values(this.props.data))
     
        // console.log(Object.values(this.props.data).map((item) => (item.testimonials))[this.props.itemId-1])
        if (this.props.data && (Object.values(this.props.data).map((item) => (item.testimonials))[this.props.itemId-1]!==undefined)) {
            
            return (
                <>
                    <div className="quantity-comments">Всего отзывов: {Object.values(Object.values(this.props.data).map((item) => (item.testimonials))[this.props.itemId-1]).length}
                    </div>
                    <div>
                        {Object.values(Object.values(this.props.data).map((item) => (item.testimonials))[this.props.itemId-1]).map((testimonial, id) => (
                            <div key={id}>
                                <TestimonialsListItem
                                    itemId={this.props.itemId}
                                    author={testimonial.author}
                                    avatar={testimonial.avatar}
                                    date={testimonial.date}
                                    text={testimonial.text}
                                    replies={testimonial.replies}
                                    id={testimonial.id}
                                    comId={id}
                                    data={this.props.data}
                                     rootPartPath={ this.props.rootPartPath}
                                />
                            </div>
                        ))}
                    </div>
                </>
            )
        } else {
            return null
        }
    }
}
export default TestimonialsList
