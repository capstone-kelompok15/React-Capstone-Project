import { useEffect, useState } from "react";

const USER_DUMMY = [
    {
        id: 0,
        name: "Abdullah Nouval Shidqi",
        email: "abdullah.nouval@gmail.com",
        display_profile_url: "string",
        phone_number: "string",
        address: "Jl kawista no 2",
        created_at: "string",
        updated_at: "string"
    },
    {
        id: 1,
        name: "Alvin Wiraprathama",
        email: "wiraprathamaalvin@gmail.com",
        display_profile_url: "string",
        phone_number: "string",
        address: "Jalan Gajah Waktra no 1",
        created_at: "string",
        updated_at: "string"
    },
    {
        id: 2,
        name: "Deni Subardi",
        email: "deni.subardi@gmail.com",
        display_profile_url: "string",
        phone_number: "string",
        address: "Jalan Sumatra no 40",
        created_at: "string",
        updated_at: "string"
    },
]

const UserDataDropdownCard = (props) => {
    const { onClick, currentEmail } = props;
    const [ userDataDummy, setUserDataDummy ] = useState(USER_DUMMY.filter((data) => data.email.includes(currentEmail)));

    useEffect(() => {
        setUserDataDummy(() => USER_DUMMY.filter((data) => data.email.includes(currentEmail.toLowerCase())));
    }, [currentEmail])

    return(
        <div className="user-suggestion-container">
            {userDataDummy.length === 0 ? <div className="user-suggestion-card">No user data found</div> : userDataDummy.map((data, i) => {
                return (
                    <div key={i} className="user-suggestion-card" onClick={() => onClick(data)}>
                        <div className="email-text">{data.email}</div>
                        <div className="name-text">{data.name}</div>
                    </div>
                )
            })}
        </div>
    );
}

export default UserDataDropdownCard;