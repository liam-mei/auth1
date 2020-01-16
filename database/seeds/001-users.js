exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "derrick1", password: "$2a$14$R36w4NJ0gfUAOx9k5P.A1ONsnYV9e5cuLJ2ImY7fYEdgDkqA5uOj6" }, // password is hashed `asdf`
        { id: 2, username: "derrick2", password: "$2a$14$R36w4NJ0gfUAOx9k5P.A1ONsnYV9e5cuLJ2ImY7fYEdgDkqA5uOj6" },
        { id: 3, username: "derrick3", password: "$2a$14$R36w4NJ0gfUAOx9k5P.A1ONsnYV9e5cuLJ2ImY7fYEdgDkqA5uOj6" }
      ]);
    });
};
