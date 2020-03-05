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
        makeHeader("faq");
    ?>
    <div align=center class="body">
        <div align=left style="max-width: 1000px;">
            <h1>FAQ</h1>
            <div class="text-block">
                <h2>What is Foundry? What is FRY?</h2>
                    <p>
                        <b>Foundry</b> is a collection of Ethereum smart contracts, which collectively makes up a DAO
                        (<a href="https://en.wikipedia.org/wiki/Decentralized_autonomous_organization">Decentralized Autonomous Organization</a>).
                        <b>FRY</b> is a crucial part of this system: a token that represents ownership and control of Foundry,
                        and the ultimate source of Foundry's (hopefully intelligent) decision-making.
                        FRY will be disbursed to the general public via the <a href="/sale">token sale</a>.
                    </p><p>
                        As Foundry becomes more self-sufficient, FRY holders can earn rewards by voting on various <b>proposals</b>.
                        These proposals will be in the form of Ethereum transactions,
                        and will include but not be limited to proposals which spend Foundry's treasury.
                    </p><p>
                        We expect FRY holders to sometimes vote to pass proposals
                        to improve or develop for-profit ventures such as DAIHard,
                        and sometimes vote to send funds to a <b>buy-back contract</b> which will
                        disburse accumulated profit from these products to FRY holders.
                    </p>
                <h2>Who controls Foundry?</h2>
                    <p>
                        At first, the <a href="#">Foundry Multisig LINKNEEDED</a> will act in the name of Foundry
                        and spend small chunks of Foundry's treasury.
                        The main purpose of this fund will be to complete Foundry's technical decentralization,
                        which essentially comes down to designing a viable <a href="#">Governance mechanism</a>,
                        implementing it in Solidity, and attaining security confidence in the implementation
                        via both internal and external audits.
                    </p><p>
                        After a successful audit, this full form of governance will be deployed and given ownership of the treasury.
                        At first, there will likely be a probationary period where the Foundry Multisig retains some veto control.
                    </p><p>
                        Once the Foundry governance mechanism is seen to be working intelligently and as intended,
                        the Foundry Multisig will give up all control and be obsolete.
                        At this point, the only owners of Foundry will be the FRY holders themselves.
                        Foundry will be capable of making decisions only via the votes and proposals of FRY holders.
                    </p>
                <h2>Does that mean FRY holders will profit?</h2>
                    <p>
                        Slow down there cowboy. Maybe not. It's entirely possible the value of FRY completely collapses.
                        There are a number of ways this might happen, so <b>do not invest more than you can afford to lose.</b>
                    </p><p>
                        As <a href="https://en.wikipedia.org/wiki/The_DAO_(organization)">The DAOsaster</a> has shown us, DAOs can fail on a technical level
                        before they ever have a chance to fail in more interesting ways.
                        In our case this danger is mitigated to some degree,
                        due partially to our LINKNEEDED<a href="#">piecewise approach</a> to building Foundry
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
                        This makes them FRY holders rather difficult to predict with high certainty.
                    </p><p>
                        FRY holders could simply vote for very stupid things. They could vote for short-sighted gain,
                        while ruining long-term profitability of Foundry. And even if Foundry does accumulate significant profit,
                        for FRY holders to personally access that profit, some kind of disbursement proposal must be explicitly
                        made and passed. We can expect that this would happen regularly (why else participate?),
                        but we simply don't know for sure.
                    </p><p>
                        Any investment involves risk, but the risk skyrockets with crypto investments,
                        and rises further if the team and asset don't yet have established histories.
                        For all you know, a month into the sale we'll take all the DAI and fly to Mauritius or buy a yacht,
                        and you'd be sitting there like an idiot with yet another useless coin. Oh how your friends will laugh!
                        And who can blame them? This ain't 2017 anymore!
                    </p>
                <h2>But FRY holders <i>might</i> profit, right?</h2>
                    <p>
                        Okay <i>fine,</i> yes, there is a chance FRY holders will see profit.
                        And not just via pumpanomic, buy-low-sell-high shenanigans.
                        Foundry may turn out to be capable of intelligently spending funds on profitable ventures,
                        accumulating this profit over a period of months or years,
                        and occasionally disbursing this profit to FRY holders.
                        This is our hope, and it's what makes this whole thing reasonable to try at all.
                        But again: FRY is far from a guarantee of any profit.
                    </p><p>
                        Throw in some change if you want to be a part of Foundry--but
                        don't quit your day job, don't mortgate your house, and <b>don't invest more than you can afford to lose.</b>
                    </p>
                <h2>What Differentiates Foundry from <a href="https://en.wikipedia.org/wiki/The_DAO_(organization)">The DAOsaster</a>?</h2>
                    <p>(outline)</p>
                    <p>Similarities</p>
                        <p>- DAO</p>
                        <p>- For-profit</p>
                        <p>- Flagship product</p>
                        <p>- VC functionality</p>
                    <p>Differences</p>
                        <p>- Piecewise and modest</p>
                        <p>- Better Security Landscape</p>
                        <p>- Real Control by FRY holders (no curators)</p>
                        <p>- No Explicit Forking</p>
                        <p>- Built Poduct</p>
            </div>
        </div>
    </div>
</body>
</html>