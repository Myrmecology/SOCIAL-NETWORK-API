const connection = require('../config/connection');
const { User, Thought } = require('../models');

const users = [
    {
        username: 'Justin',
        email: 'justin@gmail.com',
    },
    {
        username: 'Patrick',
        email: 'patrick@gmail.com'
    },
    {
        username: 'Amber',
        email: 'amber@gmail.com'
    },
    {
        username: 'Declan',
        email: 'declan@gmail.com'
    },
    {
        username: 'Alexus',
        email: 'alexus@gmail.com'
    }
];

const thoughts = [
    {
        thoughtText: 'This is a great social network API!',
        username: 'Justin'
    },
    {
        thoughtText: 'Learning MongoDB is fun!',
        username: 'Patrick'
    },
    {
        thoughtText: 'Express makes creating APIs easy',
        username: 'Amber'
    }
];

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    
    // Clean existing data
    await Thought.deleteMany({});
    await User.deleteMany({});
  
    // Add users
    const createdUsers = await User.collection.insertMany(users);
    console.log('Users seeded!');

    // Add thoughts
    const createdThoughts = [];
    for (let thought of thoughts) {
        const newThought = await Thought.create(thought);
        createdThoughts.push(newThought);
        
        // Add thought to user's thoughts array
        await User.findOneAndUpdate(
            { username: thought.username },
            { $push: { thoughts: newThought._id } }
        );
    }
    console.log('Thoughts seeded and linked to users!');

    // Add a reaction to the first thought
    await Thought.findByIdAndUpdate(
        createdThoughts[0]._id,
        { 
            $push: { 
                reactions: { 
                    reactionBody: "I agree completely!",
                    username: "Patrick"
                } 
            } 
        }
    );
    console.log('Reaction added!');

    // Add a friend connection
    const user1 = await User.findOne({ username: 'Justin' });
    const user2 = await User.findOne({ username: 'Patrick' });
    
    await User.findByIdAndUpdate(
        user1._id,
        { $push: { friends: user2._id } }
    );
    console.log('Friend connection created!');

    console.info('Seeding complete! 🌱');
    process.exit(0);
});