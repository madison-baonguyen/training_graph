const { gql } = require("apollo-server");

const typeDefs = gql`
    "Create first query to get track and author"
    type Query {
        "Get tracks array for homepage grid"
        tracksForHome: [Track!]!
    }

    "Create some type definitions"
    type Track {
        id: ID!
        "The track title"
        title: String!
        "the track author"
        author: Author!
        "thumbnail to display detail track"
        thumbnail: String
        "length to complete to read, in minutes"
        length: Int
        "the number of modules this track contain"
        modulesCount: Int
    }

    type Author {
        id: ID!
        "first name and last name of track author"
        name: String!
        "Photo url of author"
        photo: String
    }
`;


module.exports = typeDefs;