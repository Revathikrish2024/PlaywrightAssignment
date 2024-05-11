
function StudentScore(ScoreRange)
{
switch (true) {
    case (ScoreRange < 100 && ScoreRange>=85):
        return "Grade A";
    case (ScoreRange < 85 && ScoreRange>=60):
        return "Grade B";
    case (ScoreRange < 60 && ScoreRange>=40):
        return "Grade C";
        break;
    default:
        return "Score is too low"
}
}
        let ScoreRange='99'
        console.log(StudentScore(ScoreRange));
