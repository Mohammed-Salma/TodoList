import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/Grid";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import { TextField } from "@mui/material";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

const todos = [
  {
    id: uuidv4(),
    title: "المهمة الأولى",
    details: "التفاصيل الخاصة بالمهمة الأولى",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "المهمة الثانية",
    details: "التفاصيل الخاصة بالمهمة الثانية",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "المهمة الثالثة",
    details: "التفاصيل الخاصة بالمهمة الثالثة",
    isCompleted: false,
  },
];

export default function TodoList() {
  const todoItems = todos.map((t) => {
    return (
      <Todo
        key={t.id}
        title={t.title}
        details={t.details}
        isCompleted={t.isCompleted}
      />
    );
  });

  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h2" style={{ fontWeight: "bold" }}>
            مهامي
          </Typography>
          <Divider />

          {/* Filter Buttons */}
          <ToggleButtonGroup
            style={{ direction: "ltr", marginTop: "30px" }}
            // value={alignment}
            exclusive
            // onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="right">غير المنجزة</ToggleButton>
            <ToggleButton value="center">المنجزة</ToggleButton>
            <ToggleButton value="left">الكل</ToggleButton>
          </ToggleButtonGroup>

          {/* All ToDos */}
          {todoItems}

          {/* Input + Add Button */}
          <Grid container style={{ marginTop: "20px" }} spacing={2}>
            <Grid
              size={8}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="عنوان المهمة"
                variant="outlined"
              />
            </Grid>

            <Grid
              size={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Button
                variant="contained"
                style={{ width: "100%", height: "100%" }}
              >
                إضافة
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
