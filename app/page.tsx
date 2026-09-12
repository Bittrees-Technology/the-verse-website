const systems = [
  {
    index: '01',
    title: 'Persistent by default',
    body: 'Structures, ships, routes, power, production, defense, markets, and contracts continue when their owners log out. The universe does not wait for an audience.',
    signal: 'STATE / DURABLE',
  },
  {
    index: '02',
    title: 'Physical industry',
    body: 'Ore is found, mined, hauled, refined, fabricated, installed, defended, damaged, repaired, salvaged, and transformed again. Value has a material history.',
    signal: 'MATTER / CONSERVED',
  },
  {
    index: '03',
    title: 'A spatial economy',
    body: 'Goods keep a custody location. Regional scarcity, transport time, risk, and demand create real price differences across a universe priced primarily in BIT.',
    signal: 'MARKETS / LOCAL',
  },
  {
    index: '04',
    title: 'Open participation',
    body: 'Humans, bots, NPCs, and autonomous agents use the same intent interfaces, authoritative rules, and conservation model. Useful work matters more than embodiment.',
    signal: 'ACCESS / NEUTRAL',
  },
  {
    index: '05',
    title: 'A world with memory',
    body: 'Discovery, depletion, construction, trade, damage, abandonment, repair, and recovery become attributable history—evidence of what happened and who changed it.',
    signal: 'HISTORY / AUDITABLE',
  },
  {
    index: '06',
    title: 'Open by design',
    body: 'Clients and servers are open source. Public schemas and SDKs are permissive. Official rules are published, governed, versioned, and independently inspectable.',
    signal: 'PROTOCOL / OPEN',
  },
];

const roles = [
  ['SIM', 'Simulation engineers', 'Physics, voxels, persistence, replication, distributed cells, and exact recovery.'],
  ['PLAY', 'Gameplay builders', 'Movement, tools, mining, welding, construction, survival, combat, and progression.'],
  ['WORLD', 'World & visual artists', 'Industrial hardware, celestial bodies, environments, interfaces, effects, and original lore.'],
  ['ECON', 'Economy designers', 'Physical production, regional markets, contracts, liquidity, custody, and conservation.'],
  ['AGENT', 'Agent developers', 'SDKs, autonomous workers, operations, logistics, market actors, and observable authority.'],
  ['GOV', 'Governance contributors', 'Open Metaverse rules, company systems, mod review, security, licensing, and public process.'],
  ['PROVE', 'Testers & operators', 'Playtests, adversarial QA, performance evidence, packaging, infrastructure, and incident readiness.'],
  ['WRITE', 'Researchers & writers', 'Specifications, documentation, economic research, worldbuilding, tutorials, and contributor guidance.'],
];

const loop = [
  ['01', 'Extract', 'Mine a material body at its real location.'],
  ['02', 'Haul', 'Move mass through distance, risk, and custody.'],
  ['03', 'Transform', 'Refine ore and fabricate usable components.'],
  ['04', 'Construct', 'Assemble ships, bases, factories, and infrastructure.'],
  ['05', 'Continue', 'Use, repair, trade, defend, salvage, and remember.'],
];

function Brand() {
  return (
    <span className="wordmark">
      <span className="wordmark-mark" aria-hidden="true"><i /></span>
      <span>
        <strong>THE VERSE</strong>
        <small>OPEN UNIVERSE PROTOCOL</small>
      </span>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a data-insights="the-verse-home" href="#top" aria-label="The Verse, home"><Brand /></a>
        <nav aria-label="Primary navigation">
          <a data-insights="navigate-/manifesto" href="#manifesto">Manifesto</a>
          <a data-insights="navigate-/systems" href="#systems">The universe</a>
          <a data-insights="navigate-/field-log" href="#field-log">Field log</a>
          <a data-insights="navigate-/contribute" href="#contribute">Contribute</a>
        </nav>
        <a data-insights="navigate-/contribute" className="header-cta" href="#contribute">
          Build with us <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-art" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Persistent industrial space universe</p>
          <h1>A universe made by<em>those who enter it.</em></h1>
          <p className="hero-intro">
            The Verse is one persistent public universe where humans, bots, and
            AI agents mine, build, organize, work, trade, explore, and leave a
            history that matters to everyone who arrives next.
          </p>
          <div className="hero-actions">
            <a data-insights="navigate-/contribute" className="primary-button" href="#contribute">
              Choose your frontier <span aria-hidden="true">→</span>
            </a>
            <a data-insights="navigate-/manifesto" className="text-link" href="#manifesto">
              Read the world brief <span aria-hidden="true">↓</span>
            </a>
          </div>
          <ul className="signal-list" aria-label="The Verse pillars">
            <li><span>01</span> One public universe</li>
            <li><span>02</span> Physical industry</li>
            <li><span>03</span> Humans + agents</li>
          </ul>
        </div>

        <a data-insights="navigate-/manifesto" className="scroll-cue" href="#manifesto">
          <span>SCROLL TO DESCEND</span><i aria-hidden="true" />
        </a>
      </section>

      <div className="transmission" aria-label="The Verse principles">
        <div>
          <span>THE UNIVERSE PERSISTS</span><i />
          <span>WORK CREATES PROGRESS</span><i />
          <span>MATTER HAS A HISTORY</span><i />
          <span>HUMANS + AGENTS SHARE THE RULES</span><i />
          <span>THE FRONTIER REMEMBERS</span>
        </div>
      </div>

      <section className="manifesto section-light" id="manifesto">
        <div className="section-number"><span>001</span><span>MANIFESTO</span></div>
        <div className="manifesto-main">
          <p className="eyebrow dark"><span /> Persistent consequence</p>
          <h2>The world does not reset when you leave.</h2>
          <div className="manifesto-copy">
            <p>
              Every useful object has an origin: ore extracted from a place,
              cargo hauled across distance, material refined by a machine,
              components fabricated, and blocks assembled by someone with a purpose.
            </p>
            <p>
              The Verse turns those acts into a civilization. Ships carry labor
              and lineage. Stations consume power. Markets reflect geography.
              Damage changes systems. Abandoned industry becomes somebody else&apos;s frontier.
            </p>
          </div>

          <div className="matter-loop" aria-label="The physical industry loop">
            {loop.map(([number, title, body]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>

          <blockquote>
            “A useful object carries material origin, labor, ownership,
            location, operating history, and consequences that remain meaningful.”
          </blockquote>
        </div>

        <aside className="memory-ledger" aria-label="World memory ledger">
          <div className="ledger-heading">
            <span>WORLD MEMORY</span><span>PUBLIC RECORD</span>
          </div>
          {[
            ['DISCOVERY', 'ATTRIBUTED'], ['RESOURCES', 'CONSERVED'],
            ['CONSTRUCTION', 'PERSISTENT'], ['OWNERSHIP', 'VERIFIABLE'],
            ['DAMAGE', 'CONSEQUENTIAL'], ['TRADE', 'LOCATION-AWARE'],
            ['ABANDONMENT', 'SALVAGEABLE'], ['HISTORY', 'PORTABLE'],
          ].map(([label, state]) => (
            <div className="ledger-row" key={label}>
              <span>{label}</span><strong>{state}</strong><i />
            </div>
          ))}
          <div className="ledger-seal">
            <span aria-hidden="true">V</span>
            <p>THE VERSE<br />REMEMBERS</p>
          </div>
        </aside>
      </section>

      <section className="systems" id="systems">
        <div className="section-number inverse"><span>002</span><span>THE UNIVERSE</span></div>
        <div className="systems-header">
          <p className="eyebrow"><span /> One logical universe</p>
          <h2>Vast enough to disappear into. Structured enough to matter.</h2>
          <p>
            Fixed planets, asteroid fields, frontier sectors, stations, and
            deep-space routes form one shared industrial society—partitioned
            across authoritative simulation cells, continuous to everyone inside it.
          </p>
        </div>

        <div className="system-grid">
          {systems.map((system) => (
            <article key={system.index}>
              <div className="system-topline">
                <span>{system.index}</span><span>{system.signal}</span>
              </div>
              <div className={`system-glyph glyph-${system.index}`} aria-hidden="true"><i /></div>
              <h3>{system.title}</h3>
              <p>{system.body}</p>
            </article>
          ))}
        </div>

        <div className="scale-statement">
          <span>THE DISTANCE BETWEEN WORLDS IS MEASURED IN DAYS.</span>
          <strong>TRAVEL IS WORK. LOCATION IS VALUE. ARRIVAL IS HISTORY.</strong>
        </div>
      </section>

      <section className="field-log section-light" id="field-log">
        <div className="section-number"><span>003</span><span>FIELD LOG</span></div>
        <div className="field-header">
          <div>
            <p className="eyebrow dark"><span /> Khepri Prime / orbital sector</p>
            <h2>The first industrial loop is already under way.</h2>
          </div>
          <p>
            In the starting sector, a pilot steps into vacuum beside a powered
            salvage skiff, an independent mineable asteroid, and a working
            industrial platform. The route from raw matter to constructed
            infrastructure is physical, conserved, and persistent.
          </p>
        </div>

        <div className="sector-console">
          <div className="console-map" aria-label="Diagram of the Khepri Prime orbital worksite">
            <div className="map-grid" aria-hidden="true" />
            <div className="map-planet" aria-hidden="true" />
            <div className="map-object asteroid" aria-hidden="true"><i /></div>
            <div className="map-object skiff" aria-hidden="true"><i /></div>
            <div className="map-object platform" aria-hidden="true"><i /></div>
            <span className="map-label label-planet">KHEPRI PRIME<br /><i>FIXED BODY</i></span>
            <span className="map-label label-asteroid">ORIGIN FIELD<br /><i>MINEABLE</i></span>
            <span className="map-label label-skiff">SALVAGE SKIFF<br /><i>25 BLOCKS</i></span>
            <span className="map-label label-platform">INDUSTRIAL RIG<br /><i>POWERED</i></span>
          </div>
          <div className="console-data">
            <div className="console-status"><span /> SECTOR ONLINE</div>
            {[
              ['EXTRACT', 'Mine three voxels from the independent asteroid.'],
              ['REFINE', 'Route ore through physical cargo and conveyor lines.'],
              ['FABRICATE', 'Turn conserved input into a usable component.'],
              ['EXTEND', 'Build a new block onto the salvage rig.'],
              ['ANCHOR', 'Join the grid to the asteroid and change the site forever.'],
            ].map(([title, body], index) => (
              <div className="mission-step" key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><strong>{title}</strong><p>{body}</p></div>
                <i aria-hidden="true">✓</i>
              </div>
            ))}
            <a data-insights="navigate-githubcom/bittrees-technology/the-verse" href="https://github.com/Bittrees-Technology/the-verse" target="_blank" rel="noreferrer">
              Inspect the playable proof <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="open-framework">
        <div>
          <p className="eyebrow"><span /> Open Metaverse framework</p>
          <h2>Open rules. Narrow authority. Voluntary participation.</h2>
        </div>
        <div className="framework-principles">
          {['Self-sovereignty', 'Property + contracts', 'Transparent rules', 'Interoperability', 'Portable reputation', 'Nonaggression'].map((item, index) => (
            <span key={item}><i>{String(index + 1).padStart(2, '0')}</i>{item}</span>
          ))}
        </div>
        <p className="framework-note">
          Protocol authority is explicit, narrow, inspectable, and attributable.
          The code, content manifests, governance actions, and rules affecting
          participant rights or assets remain public and versioned.
        </p>
      </section>

      <section className="contribute" id="contribute">
        <div className="section-number"><span>004</span><span>CONTRIBUTE</span></div>
        <div className="contribute-header">
          <p className="eyebrow dark"><span /> Founding contributor network</p>
          <h2>There is room in the Verse for your kind of work.</h2>
          <p>
            A persistent universe takes more than a game team. It takes systems
            thinkers, artists, economists, operators, writers, adversaries,
            organizers, and people who can see the missing bridge between them.
          </p>
        </div>

        <div className="role-grid">
          {roles.map(([code, title, body], index) => (
            <article key={code}>
              <div><span>{String(index + 1).padStart(2, '0')}</span><code>{code}</code></div>
              <h3>{title}</h3>
              <p>{body}</p>
              <a data-insights="navigate-githubcom/bittrees-technology/the-verse/issues" href="https://github.com/Bittrees-Technology/the-verse/issues" target="_blank" rel="noreferrer" aria-label={`Explore ${title} contribution issues`}>
                Explore the work <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>

        <div className="contribute-cta">
          <div>
            <span className="cta-kicker">NO PERMISSION TO IMAGINE. A PROCESS TO BUILD.</span>
            <h2>Start where the universe is incomplete.</h2>
          </div>
          <div className="cta-actions">
            <a data-insights="navigate-githubcom/bittrees-technology/the-verse" className="cta-primary" href="https://github.com/Bittrees-Technology/the-verse" target="_blank" rel="noreferrer">
              Enter the codebase <span aria-hidden="true">↗</span>
            </a>
            <a data-insights="navigate-githubcom/bittrees-technology/the-verse/blob/main/contributin" href="https://github.com/Bittrees-Technology/the-verse/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer">
              Read the contribution protocol <span aria-hidden="true">→</span>
            </a>
            <a data-insights="navigate-bountiesbittreesorg/" href="https://bounties.bittrees.org" target="_blank" rel="noreferrer">
              Find Bittrees bounties <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <Brand />
          <p>
            One persistent industrial universe.<br />Built in the open by those who enter it.
          </p>
          <div className="footer-links">
            <a data-insights="navigate-githubcom/bittrees-technology/the-verse" href="https://github.com/Bittrees-Technology/the-verse" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a data-insights="navigate-githubcom/bittrees-technology/the-verse/blob/main/docs/roadma" href="https://github.com/Bittrees-Technology/the-verse/blob/main/docs/roadmap/roadmap.md" target="_blank" rel="noreferrer">Roadmap ↗</a>
            <a data-insights="navigate-githubcom/bittrees-technology/the-verse/blob/main/docs/produc" href="https://github.com/Bittrees-Technology/the-verse/blob/main/docs/product/vision.md" target="_blank" rel="noreferrer">Vision ↗</a>
            <a data-insights="navigate-bittreesorg/" href="https://bittrees.org" target="_blank" rel="noreferrer">Bittrees ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 THE VERSE CONTRIBUTORS</span>
          <span>OPEN SOURCE / OPEN METAVERSE</span>
          <span>UNIVERSE STATUS: IN ACTIVE DEVELOPMENT</span>
        </div>
      </footer>
    </main>
  );
}
