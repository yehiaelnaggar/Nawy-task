SELECT 
    colleges.name AS CollegeName,
    MIN(rankings.ranking) AS TopRanking,
    COUNT(rankings.studentId) AS NumTopStudents
FROM 
    colleges 
JOIN 
    students  ON colleges.id = students.collegeId
JOIN 
    rankings ON students.id = rankings.studentId
WHERE 
    rankings.year = 2015
    AND rankings.ranking BETWEEN 1 AND 3
GROUP BY 
    colleges.name
HAVING 
    COUNT(rankings.studentId) > 0
ORDER BY 
    TopRanking;
