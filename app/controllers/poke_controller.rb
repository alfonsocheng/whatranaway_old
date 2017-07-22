class PokeController < ApplicationController

  def calc
    # require "#{Rails.root}/lib/possible_ivs_by_cp/0.rb"
    require "#{Rails.root}/lib/possible_ivs_by_cp/#{params[:id]}.rb"
    p params
    p PokemonConstants::CP_HASH

    possibilities = [
      [1,2,3]
    ]
    render json: possibilities
  end
end
