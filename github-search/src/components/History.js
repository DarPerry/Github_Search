import React from "react";
import UserCard from "./UserCard";
import RepoCard from "./RepoCard";

const History = (props) => {
    return (
        <>
            <h2>History</h2>
            <section className='historyList'>
                {
                    props.searchHistory.map((historyItem, index) => {
                        return (historyItem.type == 'user') ?
                            <UserCard key={index} {...historyItem} /> : <RepoCard key={index} {...historyItem} />
                    })
                }
            </section>
        </>)

}

export default History;