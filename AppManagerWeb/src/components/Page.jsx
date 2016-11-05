import React from "react"
import classNames from "classnames";
import LeagueStore from "../stores/LeagueStore"

export default class Page extends React.Component {	

    constructor(props){

        super(props)
        this.startCount = 1
        this.links = []
        //this.pageRange = props.pageRange
        //this.totalPage = props.totalItemCount
        //this.displayPage = this.totalPage > this.pageRange ? this.pageRange : this.totalPage
        //var links = Array.from({ length: this.displayPage },(val,index)=>index + this.startCount);
        //this.state = { startCount : startCount, links:links}

        //this.pageClass = props.pageClass

		

    }

    selectPage(event, index){

        event.preventDefault() 

        $('.panel-pagination').each(function(idx, li) {
            $('ul li a').removeClass('active');
        });

        $(event.target).addClass("active");


        if($(event.target).html() == '&gt;'){

            if(this.startCount + this.pageRange <= this.totalPage){

                this.startCount += 1
                this.links = Array.from({length: this.displayPage},(val,index)=>index + this.startCount)
                this.state.links			
                this.setState({
                    startCount : this.startCount,
                    links : this.links
                });

            }
            else{

                this.rightArrow = false;
            }

        }
        else if($(event.target).html() == '&lt;'){

            if(this.startCount >1)
                this.startCount -= 1
            this.links = Array.from({length: this.displayPage},(val,index)=>index + this.startCount)
            this.state.links			
            this.setState({
                startCount : this.startCount,
                links : this.links
            });

        }
        else{
            console.log($(event.target).innerText)				
            
        }

    }

    initiateBaseVar(){

        var totalPage = this.props.totalItemCount >= this.props.pageRange ? Math.ceil(this.props.totalItemCount / this.props.pageRange) : 0
        this.links = Array.from({ length: totalPage },(val,index)=>index + this.startCount);

    }

    render(){

        this.initiateBaseVar()


        var bolFirst = true
        const pageLink = this.links.map((obj) => {
            if(bolFirst){
                bolFirst = false
                    return  <li key={obj} ><a href="#" className={classNames("active")} onClick={ (e) =>  {this.props.clickEvent(e, obj);this.selectPage(e, -1)}} >{obj}</a></li>
        }
            else { 
	            	return  <li key={obj}><a href="#" onClick={ (e) =>  {this.props.clickEvent(e, obj);this.selectPage(e, -1)} } >{obj}</a></li>
	            }

	    });

	    return (
		            <ul id="pageLink" key= '-3' className={classNames(this.props.pageClass)}>

		            	{(this.startCount > 1) && <li><a href="#" onClick={ (e) =>  this.selectPage(e, -1)}>&lt;</a></li> }
                       
		            	{pageLink}

		            	{(this.startCount + this.displayPage <= this.totalPage ) && <li><a href="#" onClick={ (e) =>  this.selectPage(e, -1)}>&gt;</a></li> }
		            </ul>
	            )

	    
	      
	}

}