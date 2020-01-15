exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "derrick1", password: "unhashedPassword" },
        { id: 2, username: "derrick2", password: "unhashedPassword" },
        { id: 3, username: "derrick3", password: "unhashedPassword" }
      ]);
    });
};
