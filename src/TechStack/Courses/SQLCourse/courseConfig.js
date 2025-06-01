export const courseStructure = {
  basics: {
    title: "SQL Basics",
    sections: [
      { id: "introduction", title: "Introduction to SQL" },
      { id: "syntax", title: "SQL Syntax" },
      { id: "select", title: "SELECT Statement" },
      { id: "select-distinct", title: "SELECT DISTINCT" },
      { id: "where", title: "WHERE Clause" },
      { id: "order-by", title: "ORDER BY" },
      { id: "operators", title: "SQL Operators" },
      { id: "comments", title: "SQL Comments" }
    ]
  },
  queries: {
    title: "SQL Queries",
    sections: [
      { id: "and-or-not", title: "AND, OR, NOT" },
      { id: "insert", title: "INSERT INTO" },
      { id: "null-values", title: "NULL Values" },
      { id: "update", title: "UPDATE Statement" },
      { id: "delete", title: "DELETE Statement" },
      { id: "select-top", title: "SELECT TOP" },
      { id: "like", title: "LIKE Operator" },
      { id: "wildcards", title: "Wildcards" },
      { id: "in", title: "IN Operator" },
      { id: "between", title: "BETWEEN Operator" },
      { id: "aliases", title: "Aliases" }
    ]
  },
  functions: {
    title: "SQL Functions",
    sections: [
      { id: "aggregate-functions", title: "Aggregate Functions" },
      { id: "min-max", title: "MIN and MAX" },
      { id: "count", title: "COUNT Function" },
      { id: "sum", title: "SUM Function" },
      { id: "avg", title: "AVG Function" },
      { id: "null-functions", title: "NULL Functions" },
      { id: "stored-procedures", title: "Stored Procedures" }
    ]
  },
  joins: {
    title: "SQL Joins",
    sections: [
      { id: "joins-intro", title: "Introduction to Joins" },
      { id: "inner-join", title: "INNER JOIN" },
      { id: "left-join", title: "LEFT JOIN" },
      { id: "right-join", title: "RIGHT JOIN" },
      { id: "full-join", title: "FULL JOIN" },
      { id: "self-join", title: "SELF JOIN" },
      { id: "union", title: "UNION" }
    ]
  },
  database: {
    title: "Database Operations",
    sections: [
      { id: "create-db", title: "CREATE DATABASE" },
      { id: "drop-db", title: "DROP DATABASE" },
      { id: "backup-db", title: "BACKUP DATABASE" },
      { id: "create-table", title: "CREATE TABLE" },
      { id: "drop-table", title: "DROP TABLE" },
      { id: "alter-table", title: "ALTER TABLE" },
      { id: "views", title: "Views" },
      { id: "injection", title: "SQL Injection" },
      { id: "hosting", title: "SQL Hosting" },
      { id: "data-types", title: "Data Types" }
    ]
  },
  constraints: {
    title: "SQL Constraints",
    sections: [
      { id: "constraints-intro", title: "Introduction to Constraints" },
      { id: "not-null", title: "NOT NULL" },
      { id: "unique", title: "UNIQUE" },
      { id: "primary-key", title: "PRIMARY KEY" },
      { id: "foreign-key", title: "FOREIGN KEY" },
      { id: "check", title: "CHECK" },
      { id: "default", title: "DEFAULT" },
      { id: "index", title: "INDEX" },
      { id: "auto-increment", title: "AUTO INCREMENT" }
    ]
  },
  advanced: {
    title: "Advanced SQL",
    sections: [
      { id: "group-by", title: "GROUP BY" },
      { id: "having", title: "HAVING" },
      { id: "exists", title: "EXISTS" },
      { id: "any-all", title: "ANY and ALL" },
      { id: "select-into", title: "SELECT INTO" },
      { id: "insert-into-select", title: "INSERT INTO SELECT" },
      { id: "case", title: "CASE Statement" },
      { id: "dates", title: "Working with Dates" }
    ]
  },
  examples: {
    title: "SQL Examples",
    sections: [
      { id: "basic-examples", title: "Basic SQL Examples" },
      { id: "query-examples", title: "Query Examples" },
      { id: "function-examples", title: "Function Examples" },
      { id: "join-examples", title: "Join Examples" },
      { id: "database-examples", title: "Database Examples" },
      { id: "constraint-examples", title: "Constraint Examples" },
      { id: "advanced-examples", title: "Advanced Examples" }
    ]
  }
};

export default courseStructure; 