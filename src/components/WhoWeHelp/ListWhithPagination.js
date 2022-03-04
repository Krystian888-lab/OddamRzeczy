import React from "react";
import Pagination from "./Pagination";

class ListWithPagination extends React.Component {

    state = {
        currentPage: 1,
        postsPerPage: 3
    };

    // get pageNumber from Pagination component
    paginate = (pageNumber) => this.setState({ currentPage: pageNumber });

    // set first page in list of items in pagination when change list
    componentDidUpdate(prevProps) {
        if(this.props.list !== prevProps.list) {
            this.setState({ currentPage: 1 })
        }
    }

    render() {
        // slice list for setting how much show in list
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = this.props.list.slice(indexOfFirstPost, indexOfLastPost);

return (
    <>
    <ul className="t-help--base">
        { currentPosts.map((el, index) => (

        <li className="t-help--base-list"  key={index}>

        <div className="t-help__item-left">
            <p className="t-help__title c-heading--level2">{el.who}</p>
            <p className="t-help__subtitle">{el.purpose}</p>
        </div>

        <div className="t-help__item-right">
            <p className="t-help__list">
            {el.what}</p>
        </div>
            <hr className="c-icon-box__divider2"></hr>

        </li>

            ))}
    </ul>

    <Pagination postPerPage={this.state.postsPerPage} totalPost={this.props.list.length} paginate={this.paginate} currentPage={this.state.currentPage}/>
            </>
        )
    }
}

export default ListWithPagination;