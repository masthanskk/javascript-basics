var friends =['sHAmi','LOHIth','ManI'];
// ['shami','lohith','mani']

var friendsname = friends.map( friend => friend.toLowerCase() );
    console.log(friends);
    console.log(friendsname);

var capitalize = friendsname.map(Friend => {
        const firstletter=Friend[0].toUpperCase();
        const remainingletters = Friend.substring(1);
        return firstletter + remainingletters;
})
console.log(friends);
console.log(friendsname);
console.log(capitalize);