<html>
<head>
<?php include($_SERVER['DOCUMENT_ROOT'] . "/common-assets/html/google-analytics-stuff.php"); ?>
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
            <h1>Pre-Minted Tokens</h1>
                <p>TODO</p>
            <h1>Sale Mechanics</h1>
                <p>
                    The FRY Sale starts on DATE, and will run for just under 1 year--350 days.
                    The sale will consist of 1200 <i>buckets</i>, each lasting 7 hours.
                    When a bucket ends, it will distribute a total of 50,000 FRY to those
                    who entered DAI into the bucket.
                    In the end 60,000,000 FRY will have been minted, which will be 60% of the total FRY supply.
                </p><p>
                    Upon closing, each bucket disburses FRY proportionally according to how much
                    DAI each user deposited. For example, if in a given bucket
                    Bob enters 10 DAI and Alice enters 90 DAI, and no one else participates,
                    then once the bucket closes Bob could claim (0.1 * 1200) 120 FRY,
                    and Alice could claim the remaining (0.9 * 1200) 1080 FRY.
                </p><p>
                    This means that as more people enter a given bucket,
                    the effective DAI price of FRY will continue to rise in that bucket.
                    This allows the market to agree on a price without any "flash sale" silliness,
                    but also makes it harder to predict the final price of FRY in any given bucket.
                </p><p>
                    Any bucket that has not yet closed can be entered into, including those far into the future.
                </p>
            <h1>Why Participate?</h1>
                <p>
                    Foundry is to be a champion of unstoppable finance.
                    This begins with the product DAIHard, an unstoppable gateway to and from crypto,
                    a product that is quite simply too threatening to existing institutions
                    for us at Team Toast to want to own and manage directly.
                    Foundry will be the entity to carry this project forward without the same fears
                    that we have as fragile meatbags.
                </p><p>
                    Whether DAIHard itself succeeds or fails, Foundry will continue to build
                    and invest in profitable products that increase global economic freedom.
                    Foundry will look at projects like <a href="/#zimdai">ZimDai</a> and could boldly step up to lead them,
                    given enough of a teasury. Foundry will not care if these products are illegal,
                    and will be extremely resilient to threats or pressure.
                </p><p>
                    Foundry's intelligence is nothing more or less than the collective intelligence of FRY holders.
                    Every action Foundry undertakes will be in the form of a proposal made by a FRY holder,
                    which was subsequently voted in by a majority of FRY holders.
                </p><p>
                    By entering into the sale, you become a part of this collective intelligence.
                    When a Zimbabwean FRY holder makes a proposal to use 10k DAI of Foundry's treasury
                    to push the <a href="/#zimdai">ZimDai plan</a> forward,
                    FRY will be the asset that tips the scale toward a yes or a no.
                </p>
            <h1>Who Is Eligible?</h1>
                <p>
                    We must regretfully exclude citizens of US and China. We aren't happy with this arbitrary exclusionism,
                    but given the fact that we are in fact fragile, jailable meatbags, we are in fact cowed by
                    the astounding overreach of the SEC and the clear mercilessness of the Chinese government.
                </p><p>
                    Excluding these jurisdictions allows us to speak more plainly as to our hopes for Foundry.
                </p><p>
                    If you're a US citizen and this gets your red-white-and-blue knickers in a bunch,
                    consider <a href="#">defending your constitution against enemies domestic LINKNEEDED</a>.
                </p><p>
                    Finally, you must be legally able to make such a decision in your jurisdiction,
                    and you must agree to the <a href="/sale/terms">Sale Terms and Conditions</a>
                    (these will be linked to again on the sale page).
                </p>
            <h1>(if sale not yet started)Coming Soon</h1>
                <p>[timer element]</p>
            <h1>(if sale started)Participate</h1>
                <p>[participate button]</p>
        </div>
    </div>
</body>
</html>