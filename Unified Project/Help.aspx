<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Help.aspx.cs" Inherits="Help" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Commerce Budgeting Tool</title>
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="css/styles.css" rel="stylesheet"/>
	<link href="css/fonts.css" rel="stylesheet"/>
</head>
<body>
     <div class="container">
        <!-- Navigation -->
			<div class="col-sm-2">
				<div class="row">
                    <a href="Play.aspx">
					    <div class="navButton">
						    <p>Play</p>
					    </div>
                    </a>
				</div>
				<div class="row">
					<a href="Wallet.aspx">
					    <div class="navButton">
						<p>Wallet</p>
					    </div>
                    </a>
				</div>
				<div class="row">
					<a href="Goals.aspx">
					    <div class="navButton">
						<p>Goals</p>
					    </div>
                    </a>
				</div>
				<div class="row">
					<a href="Budget.aspx">
					    <div class="navButton">
						<p>Budget</p>
					    </div>
                    </a>
				</div>
				<div class="row">
					<a href="Help.aspx">
					    <div class="navButton" style="background-color: #6ab244;">
						<p>Help</p>
					    </div>
                    </a>
				</div>
			</div>
    <!-- Content -->
        <div class="col-sm-10">
            <div class="content">
    <form id="form1" runat="server">
    <div>
    
    </div>
    </form>
                </div>
            </div>
         </div>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>-->
	<script src="bootstrap/js/jquery-3.1.1.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="bootstrap/js/bootstrap.min.js"></script>
</body>
</html>
