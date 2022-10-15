function solve() {
    class Post {
        constructor(title, content){
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\n` +
                   `Content: ${this.content}`
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes){
            super(title, content)
            this.likes = likes,
            this.dislikes = dislikes,
            this._comments = [];
        }

        get comments() {
            return this._comments;
        }

        addComment(value) {
            this._comments.push(value);
        }

        toString() {
            let rating = this.likes - this.dislikes;
            let output = [];
            output.push(super.toString(), `Rating: ${rating}`);
            if(!this._comments.length == 0) {
                output.push('Comments:')
                this._comments.forEach(comment => output.push(` * ${comment}`));   
            }

            return output.join('\n'); 
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content)
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return super.toString() + `\n` + `Views: ${this.views}`;
        };
    }

    return { 
        Post, 
        SocialMediaPost, 
        BlogPost 
    }
}

const classes = solve();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!

let blgPost = new classes.BlogPost("TestTitle", "TestContent", 0);
blgPost.view();
blgPost.view();
blgPost.view();
blgPost.view();
console.log(blgPost.toString());