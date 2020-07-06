# POKELAB SERVER

## Description

This is a graphql server filled with informations about Pokemon fetched from the [Pokemon API](https://pokeapi.co/).
The server is written in javascript using the [Apollo Data Graph Platform](https://www.apollographql.com/).

## How to use

First, download/git clone the whole folder server in the repertory of your choice.
Install the packages with `npm install`.
You can then start the server with `npm start`
Once the server is started, open your browser and go to the following adress : `http://localhost:4000/`.
This will open the graphql playground, where you can test all your queries.

## Example query

Here's the query to get the maximum information about a pokemon, given its Id (the pokemon number on the global pokedex).

```
query getPokemonById($id:ID!){
  pokemon(id:$id) {
    id
    name
    height
    weight
    types {
      id
      name
    }
    stats {
      id
      name
      base
      effort
    }
    abilities {
      id
      name
      isHidden
    }
    versions {
      id
      name
    }
    moves{
      id
      name
      details {
        level
        method
        version{
          id
       	  name
        }
      }
    }
    pictures {
      name
      url
    }
  }
}
```

Copy this in the left column of the graphql playground, and just under in the "Query Variables" box, add this

```
{
    "id": ID_YOUR_CHOICE
}
```
