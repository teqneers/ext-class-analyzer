<html>
<head>

</head>
<body>
<?php
    if(file_exists("./tmp/all.svg")) {
        ?>
        <p>
            <object data="./tmp/all.svg" type="image/svg+xml" border="1">
                <!---Fallback--->
                Ihr Browser kann leider kein svg darstellen!
            </object>
        </p>
        <br/><br/>
    <?php
    }
    if(file_exists("./tmp/extend.svg")) {
        ?>
        <p>
            <object data="./tmp/extend.svg" type="image/svg+xml" border="1">
                <!---Fallback--->
                Ihr Browser kann leider kein svg darstellen!
            </object>
        </p>
        <br/><br/>
        <?php
    }
    if(file_exists("./tmp/mixin.svg")) {
        ?>
        <p>
            <object data="./tmp/mixin.svg" type="image/svg+xml" border="1">
                <!---Fallback--->
                Ihr Browser kann leider kein svg darstellen!
            </object>
        </p>
        <br/><br/>
    <?php
    }
    if(file_exists("./tmp/instances.svg")) {
        ?>
        <p>
            <object data="./tmp/instances.svg" type="image/svg+xml" border="1">
                <!---Fallback--->
                Ihr Browser kann leider kein svg darstellen!
            </object>
        </p>
        <br/><br/>
        <?php
    }
    if(file_exists("./tmp/analysis.svg")) {
        ?>
        <p>
            <object data="./tmp/analysis.svg" type="image/svg+xml" border="1">
                <!---Fallback--->
                Ihr Browser kann leider kein svg darstellen!
            </object>
        </p>
        <br/><br/>
        <?php
}
?>
</body>
</html>