(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{257:function(e,n){e.exports={title:"1.4.26 Release",description:"Status bars plugin and upcoming GPU plugin",author:"Jordan",__content:'<p>A <a href="https://github.com/runelite/runelite/wiki/Status-Bars">Status Bars plugin</a> has been added, which\nwill display hitpoints and prayer information on the columns of the inventory, or along the left\nside of the inventory panel. Big thanks to <a href="https://github.com/Malfuryent">@Malfuryent</a> for their\ntireless work maintainng this plugin for months preparing for its addition to the client.</p>\n<p><img src="/img/blog/1.4.26-Release/status-bars-plugin.gif" alt="Status bars plugin demonstration"/></p>\n<p><a href="https://twitter.com/RuneLiteClient/status/1062440996401790977">As we&#39;ve announced on Twitter</a>, we\nwill soon be releasing the highly-anticipated GPU plugin. Keep on the lookout!</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>A bug causing the <a href="https://github.com/runelite/runelite/wiki/XP-Tracker">XP Tracker plugin</a> to\nimproperly display combat skills with strange values has been fixed</li>\n<li>Menu entry swaps will no longer affect NPCs with hint arrows above them to aid clue hunters</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Grand-Exchange">Grand Exchange plugin</a> panel has\nhad its color scheme updated to better match the rest of the client</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Friend-Notes">Friend Notes plugin</a> now uses the\nupdated chatbox dialog</li>\n<li><a href="https://github.com/runelite/runelite/wiki/XP-Globes">XP globes</a> are now ordered statically, and\nwill not change order based on the time skill experience is received</li>\n<li>A Myth&#39;s guild cannon spot for blue dragons has been highlighted in the <a href="https://github.com/runelite/runelite/wiki/Cannon">Cannon\nplugin</a></li>\n<li>Shortcuts for a stile in Taverly and the stairs to the task-restricted Skeletal wyverns area are\nnow highlighted in the <a href="https://github.com/runelite/runelite/wiki/Agility">Agility plugin</a></li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Barrows-Brothers">Barrows Brothers plugin</a>&#39;s\noverlay panel now displays reward potential and utilizes custom minimap colors in its minimap\noverlay</li>\n<li>Icons for the new portal nexus and mounted jewellery have been added to the <a href="https://github.com/runelite/runelite/wiki/Player-owned-House">Player-owned house\nplugin</a></li>\n<li>A <a href="https://github.com/runelite/runelite/wiki/Menu-Entry-Swapper">menu entry swapper</a> option has\nbeen added to swap the Private and Shared options of the Chambers of Xeric chest</li>\n<li>Overlays can no longer get stuck offscreen when switching between fixed and resizable views</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Diary-Requirements">Diary Requirements plugin</a> now\ndisplays combat level requirements for achievements requiring them</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 16 contributors this release!</p>\n<pre><code>15987632 (1):\n      Do not swap entries on NPCs with hint arrows (#6437)\n\nAdam (1):\n      devtools: add cape command\n\nArrexel (1):\n      Make Grand Exchange plugin panel background color consistent\n\nHydrox6 (2):\n      interfacestyles: Fix resizeable mode widgets\n      friendnotes: Use new chatbox input dialogue\n\nLarkCubed (1):\n      Use static skill order for XP globes (#6087)\n\nLuke Sheldon (1):\n      Add cannon spot to blue dragon area in Myth&#39;s Guils (#6460)\n\nMagic fTail (1):\n      Move &quot;Outside the Falador Party Room&quot; hot cold clue step\n\nMalfuryent (4):\n      Add IS_POISONED and QUICK_PRAYER vars\n      Add interface container widget ID\n      Expose ItemStatChangesService from ItemStats plugin\n      Add status bars plugin\n\nMax Weber (1):\n      ChatboxPanelManager: Kill panels when logging out.\n\nMaxBartlett (2):\n      Add Taverley shortcut to agility plugin (#6381)\n      Add skeletal wyvern stairs to agility shortcut plugin (#6420)\n\nMonsterxsync (1):\n      Add potential reward to the barrows overlay\n\nSebastiaanVanspauwen (1):\n      Poh plugin: Add nexus/pendant/xerics teleport icons (#6395)\n\nTheStonedTurtle (1):\n      Add option to swap &quot;Private&quot; and &quot;Shared&quot; on CoX chest (#6388)\n\nTomas Slusny (7):\n      Add AMMO(13) to EquipmentInventorySlot\n      Update item_variations.json for latest cache changes\n      Check if any experience was gained in skill before tracking action\n      Unlimit stretched resizable mode\n      Properly limit scaling factor for stretched resizable\n      Prevent overlays from moving off-screen\n      Make barrows minimap respect client minimap colors, show players\n\nWilliam (1):\n      Add ability to set combat requirements for achievement diaries (#6270)\n\nbrodan (1):\n      Make boost overlay to change to yellow at threshold\n</code></pre>'}}}]);
//# sourceMappingURL=62.d772e755.chunk.js.map