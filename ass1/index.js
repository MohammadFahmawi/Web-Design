<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment 1b Solution</title>
    <style type="text/css">
        *{
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 15px;
        }

        h2 {
            font-weight: bolder;
            text-align: center;
        }

        .menu {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        .menu-item {
            border: 1px solid black;
            margin: 15px;
            flex:  1 calc(30px);
            box-sizing: border-box;
        }

        .menu-item div {
            padding: 6px;
            font-weight: 600;
            letter-spacing: 1px;
            float: right;
        }

        #box1 {
            background-color: #F08080;
        }

        #box2 {
            background-color: rgb(137, 43, 43);
            color: white;
        }

        #box3 {
            background-color: rgb(255, 251, 185);
        }

        .menu-item-content {
            padding: 24px;
            background-color: #d3d3d3;
        }

        @media (max-width: 768px) {
            .menu-item {
                flex: 1 1 calc(50% - 30px);
            }
        }

        @media (max-width: 480px) {
            .menu-item {
                flex: 1 1 100%;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Our Menu</h2>
        <div class="menu">
            <div class="menu-item">
                <div id="box1">Chicken</div>
                <div class="menu-item-content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, sint. Non porro ab, presentium in aspernatur reiciendis. Est veniam ratione ullam unde deleniti. Assumenda vel
deleniti fugit et illo asperiores.
                </div>
            </div>
            <div class="menu-item">
                <div id="box2">Beef</div>
                <div class="menu-item-content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, sint. Non porro ab, presentium in aspernatur reiciendis. Est veniam ratione ullam unde deleniti. Assumenda vel
                    deleniti fugit et illo asperiores.                </div>
            </div>
            <div class="menu-item">
                <div id="box3">Sushi</div>
                <div class="menu-item-content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, sint. Non porro ab, presentium in aspernatur reiciendis. Est veniam ratione ullam unde deleniti. Assumenda vel
                    deleniti fugit et illo asperiores.                </div>
            </div>
        </div>
    </div>
</body>
</html>
