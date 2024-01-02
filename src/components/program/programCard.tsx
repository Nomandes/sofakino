import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

interface ProgramCardProps {
  posterPath: string;
}
export default function ProgramCard({ posterPath }: ProgramCardProps) {
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia component="img" image={posterPath} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography component="div" variant="h4">
            Kevin Allein Zuhause
          </Typography>
          <Typography component="div" variant="body1">
            Als Kevin McCallister zurückgelassen wird, während seine Familie
            eine Weihnachtsreise antritt, muss er das Haus seiner Familie vor
            zwei tollpatschigen Einbrechern schützen, bis seine Verwandten
            zurückkehren.
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex" }}></Box>
      </Box>
    </Card>
  );
}
