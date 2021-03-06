class Game < ApplicationRecord
  validates :igdb, uniqueness: true, presence: true
  validates :name, presence: true
  validates :cover, presence: true

  has_and_belongs_to_many :platforms

  def self.save_igdb_results(results)
    IGDB.parse(results).map do |game_attributes|
      if game = find_by(igdb: game_attributes[:igdb])
        game.update(game_attributes)
      else
        game = new(game_attributes)
        game.save
      end
      game.id
    end
  end

  def self.rating(id:, average:, count:)
    {
      id: id.to_i,
      score: average.to_f.round(1),
      votes: count
    }
  end
end
