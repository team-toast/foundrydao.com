<html>
<head>
    <link rel="stylesheet" href="/common-assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="/common-assets/css/style.css">
    <script src="/common-assets/js/jquery-3.4.1.min.js"></script>
    <script src="/common-assets/js/bootstrap.min.js"></script>
</head>
<body>
    <?php
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);
        include($_SERVER['DOCUMENT_ROOT'] . "/common-assets/html/header.php");
        makeHeader("home");
    ?>
    <div align=center class="body">
        <div align=left style="max-width: 1000px;">
            <h1 id="foundry">Foundry</h1>
            <div class="text-block">
                <p><a href="#teamtoast">Team Toast</a> is building a DAO called Foundry.
                    Foundry's initial purpose is to take over DAIHard stewardship,
                    as this would extend DAIHard's unkillable nature to its very development and maintenance.
                    Foundry will likely build similar products in the future:
                    for-profit, unkillable tools that increase global financial freedom,
                    which fragile meatbags are unwilling to own and manage directly.
                </p><p>Here's a speculative, non-final schematic of how Foundry might be put together.
                </p>
                <img src="/common-assets/img/foundry-schematic.png" style="width:100%">
                <p>We will be publishing more details soon,
                    both on Foundry's structure and on the sale's mechanics. 
                    We are also excited to share the "piecewise" strategy of DAO development,
                    analagous to the lean methodology for start-ups.
                </p><p>To hear about these updates, subscribe to our
                    <a href="https://medium.com/daihard-buidlers">Medium publication</a>.
                </p>
            </div>

            <h1 id="daihard">DAIHard</h1>
            <div class="text-block">
                <p>DAIHard is Team Toast's flagship product.
                    It is an unkillable, global gateway from any currency (fiat or crypto) to and from Dai.
                    It can can be used pseudonymously and without KYC,
                    and is built specifically to survive unfriendly jurisdictions (i.e. Zimbabwe).
                    It is built entirely on Ethereum smart contracts,
                    and involves no third parties to operate (not even escrow agents).
                    This is achieved chiefly via the game theory of Burnable Payments, which we've written about
                    <a href="https://medium.com/@coinop.logan/daihard-game-theory-21a456ef224e">here</a>.
                    See also our launch post
                    <a href="https://www.reddit.com/r/ethereum/comments/chl924/relaunching_the_borderless_unkillable_cryptofiat/">here</a>
                    for more on DAIHard and the problems it solves.
                </p><p>DAIHard is currently
                    <a href="https://daihard.exchange/">live on mainnet</a>,
                    but lacks liquidity.
                    Marketing and liquidity will be a major use of the funding from the Foundry sale.
                </p><p>Questions or comments?
                    <a href="https://t.me/daihardexchange_group">Join the DAIHard Telegram!</a>
                </p>
            </div>

            <h1 id="zimdai">ZimDai</h1>
            <div class="text-block">
                <p>ZimDai is a thorough investigation into the viability of boostrapping Dai adoption in Zimbabwe,
                    given the significant challenges any such endeavor faces today.
                    It is the result of two months of on-the-ground research by Logan, funded by Team Toast,
                    to analyze the market fit between DAIHard and the Zimbabwean market.
                </p><p>This research has been decoupled from reliance on DAIHard and distilled into
                    <a href="https://github.com/coinop-logan/ZimDai/raw/master/whitepaper.pdf">The ZimDai Paper: A Blueprint for an Economic Jailbreak</a>.
                    As this paper was publicized and passed around, no major flaws were uncovered.
                    Please take a look with a critical eye, and join the Telegram (link in paper) with any thoughts or questions.
                    At this point, the only missing piece seems to be a marketing drive--both leadership and funding.
                </p><p>Given a marketing drive, we may have on our hands a strikingly realistic,
                    immediately applicable plan to liberate the Zimbabwean citizenry from systemic financial abuse.
                    This has been a dream within crypto for years.
                    Perhaps today crypto can begin making these kinds of significant moves on the global stage.
                </p><p>If the Foundry sale accumulates significant funding, it could decide to step into this gap,
                    funding and leading the ZimDai movement.
                    We will share more thoughts on this soon, again via our
                    <a href="https://medium.com/daihard-buidlers">Medium publication</a>.
                </p>
            </div>

            <h1 id="teamtoast">Team Toast</h1>
            <div class="text-block container-fluid">
                <div class="row" style="padding:1em">
                    <div class="col-sm-3">
                        <img class="img-fluid" style="width: 100%;" src="/common-assets/img/oglog.jpg">
                    </div>
                    <div class="col-sm-9">
                        <h2 style="font-weight:700">Logan Brutsche</h2>
                        <p>Co-founder and CEO of Team Toast, and doting mother of Foundry.
                            Lead developer for DAIHard and Foundry.
                            Developed the Burnable Payment and DAIHard smart contracts.
                        </p>
                    </div>
                </div>
                <div class="row" style="padding:1em">
                    <div class="col-sm-3">
                        <img class="img-fluid" style="width:100%;" src="/common-assets/img/schalk.png">
                    </div>
                    <div class="col-sm-9">
                        <h2 style="font-weight:700">Schalk Dormehl</h2>
                        <p>Co-founder of Team Toast and Sugar Daddy for Foundry.
                            Pays Foundry's bills while it grows up to be a big strong DAO.
                            Developed the Bucket Sale smart contract and tests.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>