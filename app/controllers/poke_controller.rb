class PokeController < ApplicationController

  def calc
    # require "#{Rails.root}/lib/possible_ivs_by_cp/0.rb"
    require "#{Rails.root}/lib/possible_ivs_by_cp/#{params[:id]}.rb"
    p params
    all_possibilities = "Pokemon#{params[:id]}Constants::IVS_BY_CP".constantize
    # debugger
    if all_possibilities[params[:cp].to_i].present?
      render json: all_possibilities[params[:cp].to_i]
    else
      render json: [[nil, all_possibilities.keys.min, all_possibilities.keys.max]]
    end
  end
end
