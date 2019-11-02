import React, { useState } from "react";

function MemberTable({ members }) {
    const listmem = <table> <thead>
        <tr>
            <th>Name</th>
            <th>Phone</th>
        </tr>
    </thead>
        {members.map(item => <tr>
            <td> {item.name}  </td>
            <td> {item.age} </td> </tr>)} </table>;
    console.log(listmem);
    return (
        <table>
            {listmem}
        </table>
    );
}

function MemberDemo(props) {
    return (
        <div>
            <h4>All Members</h4>
            {MemberTable(props)}
        </div>
    );
}

export default function App() {
    const initialMembers = [{ name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }];
    const [members, setMembers] = useState(initialMembers)

    return (<MemberDemo members={members} />)
}
