<html>
<head>
<script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0094/2740.js" async="async"></script>
<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    include($_SERVER['DOCUMENT_ROOT'] . "/common-assets/html/google-analytics-stuff.php");
    include($_SERVER['DOCUMENT_ROOT'] . "/common-assets/php/random_v_pic.php");
?>
    <title>Foundry</title>
    <link rel="stylesheet" href="/common-assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="/common-assets/css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" rel="stylesheet"> 
    <script src="/common-assets/js/jquery-3.4.1.min.js"></script>
    <script src="/common-assets/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.countdown/2.2.0/jquery.countdown.min.js"></script>
    <script src="/common-assets/js/timer.js"></script>
</head>
<body>
    <?php
        include($_SERVER['DOCUMENT_ROOT'] . "/common-assets/html/header.php");
        makeHeader("home", true);
    ?>
    <div class="body">
        <div class="front-page-section">
            <div class="float-md-left front-page-block" style = "background-color: rgb(16, 7, 234);">
                <div class="pretitle">THE DAO</div>
                <div class="title">Foundry and FRY</div>
                <div class="blurb">
                    Foundry's future is in the hands of FRY holders.
                </div>
                <div class="countdown-block">
                    <div style="font-weight:bold">SALE STARTS IN</div>
                    <div id="clock" class="countdown"></div>
                </div>
            </div>
            <div class="section-points-container container">
                <div class="row">
                    <div class="col-md-4 section-point">
                        <div class="title">Tools for Economic Freedom</div>
                        <div class="blurb">
                            Foundry will accumulate FRY holders who believe in unstoppable economic freedom. After SmokeSignal and DAIHard, FRY holders will likely drive Foundry to build or invest in similar pursuits: profitable tools that increase economic freedom which cannot be shut down.
                        </div>
                    </div>
                    <div class="col-md-4 section-point">
                        <div class="title">Liquid Democracy</div>
                        <div class="blurb">
                            Team Toast is designing a Liquid Democracy system that allows Foundry to rely on FRY holders for intelligent decision-making, while avoiding common pitfalls of DAO governance. <a href="https://github.com/team-toast/foundry-design/releases/latest/download/foundry-design.pdf">Read the whitepaper</a> for more on this design.
                        </div>
                    </div>
                    <div class="col-md-4 section-point">
                        <div class="title">FRY Sale</div>
                        <div class="blurb">
                            The sale of FRY will open at noon UTC, May 19th. Click below to get a reminder when it's open!
                        </div>
                        <a class="elmish-red-button" href="https://emailoctopus.com/lists/98c743f3-78f3-11ea-a3d0-06b4694bee2a/forms/subscribe">Get Notified</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="front-page-section">
            <div class="float-md-left front-page-block anchor" style="background-color: rgb(219, 19, 105);">
                <a class="modified-anchor" name="products"> </a>
                <div class="pretitle">THE PRODUCTS</div>
                <div class="title">SmokeSignal and DAIHard</div>
                <div class="blurb">
                    Unkillable, global, uncensorable products, ready today. Foundry does not ask permission.
                </div>
            </div>
            <div class="section-points-container container">
                <div class="row">
                    <div class="col-md-4 section-point">
                        <div class="title">SmokeSignal</div>
                        <div class="blurb">
                            SmokeSignal is a herald of an age without censorship.
                            Pseudonymous users can post to topics and reply in a nested fashion,
                            and each post is both immediately public and impossible to delete.
                            <a href="/smokesignal/app">The conversation has already started.</a>
                        </div>
                    </div>
                    <div class="col-md-4 section-point">
                        <div class="title">DAIHard</div>
                        <div class="blurb">
                            DAIHard extends many of the promises of crypto (borderless, anonymous, limitless, unstoppable)
                            into entering and exiting crypto itself.
                            Anyone, anywhere can buy and sell DAI for local cash in a peer-to-peer marketplace, without KYC.
                            <a href="https://daihard.exchange/#/marketplace">Browse the DAIHard marketplace</a>
                        </div>
                    </div>
                    <div class="col-md-4 section-point">
                        <div class="title">The Road Ahead</div>
                        <div class="blurb">
                            Foundry will attract FRY holders who value profitable tools that guarantee economc freedom.
                            This will give Foundry a preference to fund products that fragile meatbags may be reluctant to,
                            for fear of persecution.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="front-page-section">
            <div class="float-md-left front-page-block anchor" style="background-color: rgb(2, 128, 167);">
                <a class="modified-anchor" name="zimdai"> </a>
                <div class="pretitle">THE DREAM</div>
                <div class="title">ZimDai</div>
                <div class="blurb">
                    Zimbabweans are trapped in an abusive economic system. But crypto is growing teeth.
                </div>
                <a href="https://github.com/coinop-logan/ZimDai/raw/master/whitepaper.pdf">
                    <div style="font-weight:bold; color:white;">READ THE ZIMDAI PAPER</div>
                </a>
            </div>
            <div class="section-points-container container">
                <div class="row">
                    <div class="col-md-4 section-point">
                        <div class="title">Zimbabwe's Plight</div>
                        <div class="blurb">
                            The official currency of Zimbabwe is rapidly inflating,
                            <a href="https://en.wikipedia.org/wiki/Hyperinflation_in_Zimbabwe">and this is nothing new.</a>
                            It is practically impossible to save money in such an environment,
                            and entrepreneurship is being strangled.
                            Worse, the banking system significantly limits withdrawals, and ATMs simply don't work.
                            Internal political pressure has proven incapable of changing any of this.
                        </div>
                    </div>
                    <div class="col-md-4 section-point">
                        <div class="title">Blueprint For an Economic Jailbreak</div>
                        <div class="blurb">
                            <a href="https://github.com/coinop-logan/ZimDai/raw/master/whitepaper.pdf">
                                The ZimDai Paper: A Blueprint for an Economic Jailbreak
                            </a>
                            is a thorough investigation into the viability of boostrapping Dai adoption in Zimbabwe,
                            given the significant challenges any such endeavor faces today.
                            It assumes a hostile state and does not rely on jurisdictional permission.
                            It is the result of two months of on-the-ground research by Logan, funded by Team Toast.
                        </div>
                    </div>
                    <div class="col-md-4 section-point">
                        <div class="title">The Missing Piece</div>
                        <div class="blurb">
                            What's needed is a marketing drive. With both marketing leadership and funding,
                            we may have on our hands a strikingly realistic,
                            immediately applicable plan to liberate the Zimbabwean citizenry from systemic financial abuse.
                            This has been a dream within crypto for years.
                            Given significant funding, we expect Foundry to lead and fund this campaign.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="front-page-section">
            <div class="float-md-left front-page-block anchor" style="background-color: rgb(10, 33, 108);">
                <a class="modified-anchor" name="team"> </a>
                <div class="pretitle">THE TEAM</div>
                <div class="title">Team Toast</div>
                <div class="blurb">
                    We're a small team centered around development of Foundry and its products.
                </div>
            </div>
                <div class="team container">
                    <div class="row" style="padding:1em">
                        <div class="col-xs-4 col-md-3">
                            <img src="/common-assets/img/oglog.jpg" >
                        </div>
                        <div class="col-xs-8 col-md-6">
                            <h2 style="font-weight:700">Logan Brutsche</h2>
                            <p class="blurb">Co-founder and CEO of Team Toast, and doting mother of Foundry.
                                Lead developer for DAIHard, Foundry, and SmokeSignal.
                                Developed the Burnable Payment, DAIHard, and SmokeSignal smart contracts.
                                Uses the Cu Chi Tunnels extensively to evade The Man. <a href="https://www.reddit.com/user/coinop-logan">reddit</a>
                            </p>
                        </div>
                    </div>
                    <div class="row" style="padding:1em">
                        <div class="col-xs-4 col-md-3">
                            <img src="/common-assets/img/schalk.png">
                        </div>
                        <div class="col-xs-8 col-md-6">
                            <h2 style="font-weight:700">Schalk Dormehl</h2>
                            <p class="blurb">Co-founder of Team Toast and Sugar Daddy for Foundry.
                                Pays Foundry's bills while it grows up to be a big strong DAO.
                                Developed the Bucket Sale contract and associated tests.
                                Leads research and development for DAO governance.
                                Exists in a permanent state of bewildered or concerned confusion.
                            </p>
                        </div>
                    </div>
                    <div class="row" style="padding:1em">
                        <div class="col-xs-4 col-md-3">
                            <img src="<?php echo getRandomVPicPubSrc();?>">
                        </div>
                        <div class="col-xs-8 col-md-6">
                            <h2 style="font-weight:700">V for Visuals</h2>
                            <p class="blurb">Visual Designer for DAIHard and Foundry. Shrouded in secrecy.
                                Those who speak its true name invite disaster and misfortune.
                                Coaxed into manifestation by offers of cheap liquor and forbidden dark magicks.
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</body>
</html>