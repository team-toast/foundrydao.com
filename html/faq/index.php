<html>
<head>
<?php include($_SERVER['DOCUMENT_ROOT'] . "/common-assets/html/google-analytics-stuff.php"); ?>
    <link rel="stylesheet" href="/common-assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="/common-assets/css/style.css">
    <script src="/common-assets/js/jquery-3.4.1.min.js"></script>
    <script src="/common-assets/js/bootstrap.min.js"></script>
    <title>Foundry - FAQ</title>
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
                    <h3>For-Profit DAOs with Flagship Products</h3>
                        <p>
                            At a conceptual level, both The DAOsaster and Foundry are built with similar intents:
                            they are meant to be for-profit DAOs. They also each focus a lot on their flagship product.
                            The DAOsaster focused on the smart lock as its initial profitable venture,
                            while Foundry places a similar emphasis on DAIHard and SmokeSignal.
                        </p><p>
                            But there is an important distinction here: the smart lock had yet to actually be produced,
                            and in any case was aiming at a much more experimental (if inspiring) use case.
                            In contrast, DAIHArd and SmokeSignal are already built and live, 
                            both with a profit mechanism in-place and pointed at Foundry.
                        </p><p>
                            Another difference is the expectation of who would develop the flagship product.
                            The smart lock was to be built exclusively by Slock.it. While in theory the DAOsaster could have
                            funded other products, the short-to-medium-term business plan relied heavily on Slock.it.
                            In contrast, anyone can work on DAIHard or some other product and request support from Foundry.
                            This was in fact our primary motivation for building Foundry in the first place:
                            developing unstoppable exchanges to crypto and uncensorable social media puts targets on our backs,
                            so we want to pass the torch to Foundry, which can't be shot or jailed like us fragile meatbags.
                        </p>
                    <h3>Solidity Design</h3>
                        <p>
                            The Solidity (i.e. smart contract) design of The DAOsaster was, simply put, atrocious.
                        </p><p>
                            ENGAGE SCHALK RANT
                        </p>
                    <h3>Decentralized Decision Making?</h3>
                        <p>
                            Both The DAOsaster and Foundry cast token holders as key decision makers in the respecive DAOs,
                            but in the case of the DAOsaster this came with a number of significant caveats.
                            In reality, The DAOsaster's "curators"--a set of pre-decided individuals--exercised
                            incredible control over which proposals even came to a vote. The SEC's
                            <a href="http://www.sec.gov/litigation/investreport/34-81207.pdf">Report of Investigation</a>
                            lays it out rather clearly:
                        </p><p>
                            "DAO Token holders’ votes were limited to proposals whitelisted by the Curators, and, although any DAO Token holder could put forth a proposal, each proposal would follow the same protocol, which included vetting and control by the current Curators.  While DAO Token holders could put forth proposals to replace a Curator, such proposals were subject to control by the current Curators, including whitelisting and approval of the new address to which the tokens would be directed for such a proposal."<p>
                        </p><p>
                            In other words, the pre-determined list of Curators had ultimate control over any action the DAO would take.
                            For example, if there was good reason to choose some contractor over Slock.it,
                            but the Curators had conflicting interests, they would be capable of blocking all proposals
                            to make such a switch, ensuring Slock.it remains the sole contractor of The DAOsaster.
                            Additionally, if all curators were jailed or killed, The DAOsaster would simply become completely paralyzed.
                        </p><p>
                            In contrast, FRY holders will have complete control over Foundry
                            once the governance mechanism is implemented.
                            Team Toast has no interest or intent to act as anything like curators,
                            or appoint others into this role.
                            A primary purpose of Foundry is to develop and maintain products that fragile meat bags
                            are unwilling or afraid to manage directly, and thus we have no choice:
                            the only acceptable configuration is to have Foundry be directly controlled by
                            the decentralized, amorphous community of FRY holders themselves.
                        </p>
            </div>
        </div>
    </div>
</body>
</html>