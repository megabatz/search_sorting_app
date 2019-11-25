import React from 'react';

const UserListItem = ({img, nameListUser, ageListUser, phoneListUser}) => {

    return (
                <div>
                    <div className="blockLeft">
                        <div className="imgListUser">
                            <img src={img} alt="" />
                        </div>
                        <div className="nameListUser">
                            <p>{nameListUser}</p>
                        </div>
                    </div>
                    <div className="blockRight">
                        <div className="ageListUser">
                            <p>{ageListUser}</p>
                        </div>
                        <div className="phoneListUser">
                            <p>{phoneListUser}</p>
                        </div>
                    </div>
                </div>
    )
};

export default UserListItem;