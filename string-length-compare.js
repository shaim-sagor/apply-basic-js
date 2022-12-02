function perfectFriend(friends) {
    let firstFriend = friends[0].length;
    let result = [];

    //exceptation handle 
    if (typeof friends == 'number') {
        return "enter an array of string"
    }

    //catch the length
    for (let i = 1; i < friends.length; i++) {
        const friendList = friends[i].length;


        ///compare the length
        if (firstFriend > friendList) {
            result.push(friends[i]);
        }

    }
    return result;
}

const myFriends = ['abdul', 'aklam', 'odii', "kok", 'fawhfffh', 'jobbar', 'abdul'];
console.log(perfectFriend(myFriends));