<html>
<head>
    <link rel="stylesheet" href="/common-assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="/common-assets/css/style.css">
    <script src="/common-assets/js/jquery-3.4.1.min.js"></script>
    <script src="/common-assets/js/bootstrap.min.js"></script>
</head>
<body>
    <?php
        // ini_set('display_errors', 1);
        // ini_set('display_startup_errors', 1);
        // error_reporting(E_ALL);
        include($_SERVER['DOCUMENT_ROOT'] . "/common-assets/html/header.php");
        makeHeader("sale");
    ?>
    <div align=center class="body">
        <div align=left style="max-width: 1000px;">
            <h1>FAQ</h1>
                <h2>How does FRY relate to Foundry?</h2>
                    <p>
                        <b>Foundry</b> is a collection of Ethereum smart contracts, which collectively makes up a DAO
                        (<a href="https://en.wikipedia.org/wiki/Decentralized_autonomous_organization">Decentralized Autonomous Organization</a>).
                        <b>FRY</b> is a crucial part of this system: a token that represents ownership and control of Foundry,
                        and the ultimate source of Foundry's (hopefully intelligent) decision-making.
                    </p><p>
                        As Foundry becomes more self-sufficient, FRY-holders can earn rewards by voting on various <b>proposals</b>.
                        These proposals will be in the form of Ethereum transactions,
                        and will include but not be limited to proposals which spend Foundry's treasury.
                    </p><p>
                        We expect FRY holders to sometimes vote to pass proposals
                        to improve or develop for-profit ventures such as DAIHard,
                        and sometimes vote to send funds to a <b>buy-back contract</b> which will
                        disburse accumulated profit from these products to FRY holders.
                    </p>
                <h2>Does that mean FRY holders will profit?</h2>
                    <p>
                        We hope so, but not necessarily. There are a number of ways a FRY-holder expecting profit may be disappointed.
                    </p><p>
                        As <a href="https://en.wikipedia.org/wiki/The_DAO_(organization)">The DAOsaster</a> has shown us, DAOs can fail on a technical level
                        before they ever have a chance to fail in more interesting ways.
                        This danger is mitigated to some degree, due partially to our LINKNEEDED<a href="#">piecewise approach</a> to building Foundry
                        and partially to how much the Ethereum community has learned about security since then.
                        But there are still no guarantees when building this stuff, and successful models of DAO governance are in very short supply.
                        Although we're taking security very seriously, perfect security confidence can never truly be reached--only approached.
                    </p><p>
                        Even if there are no outright bugs, a DAO governance model must be able to resist various forms of attacks.
                        For example, what if someone buys 51% of the tokens, then votes to immediately send himself
                        100% of the funds in the treasury?
                        We seem to have solved this our implementation of "Liquid Democracy" (we will post more on this soon),
                        but any proposed DAO governance system may have unpredicted corner such as this,
                        which may only come to light after launch.
                    </p><p>
                        Assuming no technical bugs and no unexpected corner-cases, there is still a significant source of uncertainty:
                        the FRY holders themselves.
                        Foundry has no decision-making capability outside the proposals and votes from FRY holders. What's more,
                        FRY holders are not known individuals as in the case of LINKNEEDED Moloch/MetaCartel/etc:
                        they are pseudonymous agents on Ethereum, freely purchasing FRY via the sale or secondary markets.
                        This isn't necessarily a bad thing, but it makes them somewhat more difficult to predict.
                    </p><p>
                        FRY holders could simply vote for very stupid things. They could vote for short-sighted gain,
                        while ruining long-term profitability of Foundry. And even if Foundry does accumulate significant profit,
                        for FRY holders to personally access that profit, some kind of disbursement proposal must be explicitly
                        made and passed. We can expect that this would happen regularly (why else participate?),
                        but we simply don't know for sure.
                    </p><p>
                        Having said all of this: don't tell the lawyers, but yes, there is a real chance FRY could be profitable.
                        And not just via pumpanomic, buy-low-sell-high shenanigans.
                        Foundry may turn out to be capable of intelligently spending funds on profitable ventures,
                        accumulating this profit over a period of months or years,
                        and occasionally disbursing this profit to FRY holders.
                    </p>
                <h2>What is the Treasury?</h2>
            <h1>Why Participate?</h1>
            <p>Because u loco
            </p>
            <h1>Token Sale Numbers</h1>
            <p>Lots of em
            </p>
            <h1>Who Is Eligible?</h1>
            <p>Everyone Except The Damn Yankees
            </p>
            <h1>Coming Soon</h1>
            <p>(tm)
            </p>
        </div>
    </div>
</body>
</html>