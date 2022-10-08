function solution(input) {

    if (input === 'upvote') return this.upvotes++;
    if (input === 'downvote') return this.downvotes++;

    let upvote = this.upvotes;
    let downvote = this.downvotes;
    let totalVotes = upvote + downvote;
    let balance = upvote - downvote;

    function rating() {
        if (totalVotes < 10) return 'new';
        if (upvote > totalVotes * 0.66) return 'hot';
        if (balance >= 0 && totalVotes > 100) return 'controversial';
        if (balance < 0) return 'unpopular';
        return 'new';
    }

    if (totalVotes > 50) {
        let vote = Math.ceil(Math.max(upvote, downvote) * 0.25);
        return [upvote + vote, downvote + vote, balance, rating()];
    }

    return [upvote, downvote, balance, rating.call(this)];

}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote');         // (executed 50 times)
score = solution.call(post, 'score'); 