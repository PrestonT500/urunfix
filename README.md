# uRun - Bypass bookmarklet restrictions with an adblocker
**This is a attempt at fixing uRun by**

<a href="https://github.com/PrestonT500/urunfix/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=PrestonT500/urunfix" />
</a>

**Original uRun by Inglan2**

### Installation
1. Open uBlock settings
2. Enable advanced settings, and click the gear ⚙️ button
> ![image](https://github.com/Inglan2/uRun/assets/117789688/e7d21961-4d76-45a8-afe1-f97479763928)

> [!CAUTION]
> DO MODIFY ANYTHING ELSE ON THIS PAGE, UNLESS YOU KNOW WHAT YOU ARE DOING, AS YOU COULD BREAK SOMETHING.

> [!TIP]
> If you mess up, go to the home of settings and at the bottom click reset to default settings

3. Add the script
> Change
> ```
> userResourcesLocation unset
> ```
> to
> ```
> userResourcesLocation https://prestont500.github.io/urunfix/urun.js
> ```

> [!TIP]
> It's down at the bottom
4. Set a filter to load uRun
> After closing the advanced settings tab, go to the filters tab and add this:
> ```
> *##+js(urun.js)
> ```

## Usage
Simply press Ctrl + Shift + \` to open the menu and from there you can run and create scripts. To add a script, press the ➕ button up the top right, and enter the code you would like to add (without the `javascript:` part).
