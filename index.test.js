const { getFilteredFestivals } = require('./index');

test('should return an array of festivals', async () => {
    const festivals = await getFilteredFestivals();

    expect(Array.isArray(festivals)).toBe(true);
    expect(festivals.length).toBeGreaterThan(0);
    expect(festivals[0]).toHaveProperty('nom');
    expect(festivals[0]).toHaveProperty('domaine');
    expect(festivals[0]).toHaveProperty('commune');
    expect(festivals[0]).toHaveProperty('siteWeb');
    expect(festivals[0]).toHaveProperty('moisHabituelDeDebut');
});
