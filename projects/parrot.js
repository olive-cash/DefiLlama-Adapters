const {getTokenBalance} = require('./helper/solana')

async function tvl() {
    const [usdcEarn, btcSbrEarn, solMerPai, usdTriEarn, PTTPAI,
        usdcUstSbrEarn, solprtSbrEarn, usdcRayEarn, solPai, solPsol,
        btcRenP, btcRenPai, srmPai, usdtPai, solPrtP, 
        usdcPbtc, usdcUsdtSbrEarn, solRayEarn, usdcPai, btcPbtc,
        solmSbrEarn ] = await Promise.all([
        //getTokenBalance('mint', 'vaultTypePDA') https://doc.parrot.fi/security/inspect.html

        //USDC:PAI+EARN YES
        getTokenBalance("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "AjExAjiLEDLLka42n1biVs5akE5qJ6gNTHH8JKByxW4h"),
        //SBR LP (BTC-renBTC):pBTC+EARN YES
        getTokenBalance("SLPbsNrLHv8xG4cTc4R5Ci8kB9wUPs6yn6f7cKosoxs", "Cz5G4RkGdEFN4BACZHJnTW67GUcVzdSi4jAH2E173pkK"),
        //MER LP (pSOL-SOL):PAI NO
        getTokenBalance("GHhDU9Y7HM37v6cQyaie1A3aZdfpCDp6ScJ5zZn2c3uk", "nkNjtZMzxhFsb3hEWvA5cvsX1otTrKkTd1DnS177bd3"),
        //MER LP (USDC-USDT-UST):PAI+EARN NO
        getTokenBalance("57h4LEnBooHrKbacYWGCFghmrTzYPVn8PwZkzTzRLvHa", "6EnWVbLNijTPNQEy73MvkPcDeyEvChiKeMY2aVvMtvkC"),
        //PTT:PAI ????
        getTokenBalance("E2Ub8wPfxxEvdrtumbfeL2HaQHgpd3gUGkDxDmmgN3p9", "4wqB5wkBbQu4E4V3RofEJmy2zgHh354nvvPqhZw2ySVc"),

        //SBR LP (UST-USDC):PAI+EARN NO
        getTokenBalance("UST32f2JtPGocLzsL41B3VBBoJzTm1mK1j3rwyM3Wgc", "9zJi3M2wWeafjt9eyPh9iGNovuFeM4xrdtzen1sKSjeb"),
        //SBR LP (prtSOL-SOL):pSOL+EARN NO
        getTokenBalance("PrsVdKtXDDf6kJQu5Ff6YqmjfE4TZXtBgHM4bjuvRnR", "9jCNEAn4PUNwGvpQikHjt1Udv1z58gf1Yb5x5bmE7y1k"),
        //RAY LP (MER-USDC):PAI+EARN NO
        getTokenBalance("3H9NxvaZoxMZZDZcbBDdWMKbrfNj7PCF5sbRwDr7SdDW", "5xbHeB7BS7YJAChLamfdeFna5HPxj481KQrymxJnH4S2"),
        //wSOL:PAI
        getTokenBalance("So11111111111111111111111111111111111111112", "62Xb5ydBN1vrkg85SuKEL6aPv4bsy6iTiH3Jvki8NfNr"),
        //mSOL:pSOL
        getTokenBalance("mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So", "GJU8CWPYSg6Zu4jpMN9M9JSxaftm54NjpZe6QPtiVeXK"),

        //renBTC:pBTC
        getTokenBalance("CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5", "6HE83GFg4odsntioHrNrWHyyBeJR1644c3b2yLNV8LDN"),
        //renBTC:PAI
        getTokenBalance("CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5", "7Efka6Lp7i1zUdQxwCpVpCKkiU52t9HR8QULir3K6oBe"),
        //SRM:PAI
        getTokenBalance("SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt", "q96RZiNkec9PAfLtgrJaGLvXSK9fxs4DQ1g6RbiSvJg"),
        //USDT:PAI
        getTokenBalance("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", "DGi3TxcKUq3E5t1mL33n9jRgdWWKngeRkP3fUppG4inn"),
        //prtSOL:pSOL
        getTokenBalance("BdZPG9xWrG3uFrx2KrUW1jT4tZ9VKPDWknYihzoPRJS3", "tjXrYz2USzesD9YUXWoW8UJRAmkQ3dwSmzfYDN6bifk"),

        //USDC:pBTC
        getTokenBalance("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "DQV7nFUWKSsiT7eWPhfGhdiRFsU1DmnEYgbFGKuPPsMs"),
        //SBR LP (USDC-USDT):PAI+EARN
        getTokenBalance("2poo1w1DL6yd2WNTCnNTzDqkC6MBXq7axo77P16yrBuf", "AvfKigSXwRKXNQ9PTeUDWQnMdZWz2j6oH569t96S1Md5"),
        //RAY LP (SOL-USDC):PAI+EARN
        getTokenBalance("8HoQnePLqPj4M7PUDzfw8e3Ymdwgc7NLGnaTUapubyvu", "4zTNPK46rsRNRCpbkGChBaEZZYYMoZ7YaBEn51yfBHuW"),
        //USDC:PAI
        getTokenBalance("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "DefDiDiauGqS8ZUiHHuRCpmt8XZPGTTp6DY7UQP5NkkP"),
        //BTC (sollet):pBTC
        getTokenBalance("9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E", "CkgNPPZasMZJyNsefrTGgG8shZ87W1CAcXCHjhjwAEUW"),

        //SBR LP (mSOL-SOL):pSOL+EARN
        getTokenBalance("SoLEao8wTzSfqhuou8rcYsVoLjthVmiXuEjzdNPMnCz", "A8gtS5FV2UgjCjKxAEPm6aCXjPQaaeiZJKeGJnR1adCs")
    ])
    return {
        'usd-coin': usdcEarn + usdcPbtc + usdcPai + usdcUstSbrEarn + (usdTriEarn / 3),
        'terra-usd': usdcUstSbrEarn + (usdTriEarn / 3),
        'tether': usdtPai + usdcUsdtSbrEarn + (usdTriEarn / 3),
        'solana': solPai + solPrtP + solPsol + solmSbrEarn + solprtSbrEarn + solRayEarn + solMerPai,
        'serum': srmPai,
        'renbtc': btcRenP + btcRenPai,
        'bitcoin': btcPbtc + btcSbrEarn,
    }
}
module.exports = {
    tvl,
    methodology: `To obtain the Parrot TVL we make on-chain calls using the function getTokenBalance() that uses the token addresses and the vault addresses where deposits are made to mint PAI, pBTC or pSOL. Hence, the addresses used are the addresses that hold the collateral for the protocol and these addresses are hard-coded. The calls made return the number of tokens held in each contract for us to then use Coingecko to get the price of each token in USD and export the sum of all tokens. Since the Mercurial and Saber LP tokens that are used as collateral have a virtual price of $1, these are counted as Tether.`,
}